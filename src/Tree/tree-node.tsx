import React, { useEffect, useRef } from 'react';
import useToggle from '../hooks/useToggle';
import { TreeNodeProps } from './type';
import Icon from '../Icon/icon';
import { createScopedClasses, classNames } from '../utils/classNames';
const sc = createScopedClasses('tree');

const deepFlatten = (arr: any) =>
  [].concat(...arr.map((v: any) => (Array.isArray(v) ? deepFlatten(v) : v)));

const useUpdateNotDidMount = (fn: any, dep: any) => {
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, [dep]);
};

const useCollapseAnimate = (ref: any, isExpand: any) => {
  const d = ref.current;
  if (!d) return;
  if (isExpand) {
    d.style.height = 'auto';
    const { height } = d.getBoundingClientRect();
    d.style.height = '0px';
    d.getBoundingClientRect();
    d.style.height = height + 'px';
    const y = () => {
      d.style.height = 'auto';
      d.removeEventListener('transitionend', y);
    };
    d.addEventListener('transitionend', y);
  } else {
    const { height } = d.getBoundingClientRect();
    d.style.height = height + 'px';
    d.getBoundingClientRect();
    d.style.height = '0px';
  }
};

const TreeNode: React.FC<TreeNodeProps> = props => {
  const {
    checkedKeys,
    onCheck,
    node,
    sourceMap,
    source,
    onDropEnd,
  }: any = props;

  const isChecked = checkedKeys.indexOf(node.key) > -1;

  const [isExpand, setExpand] = useToggle(true);

  const collapseDivRef: any = useRef();

  useUpdateNotDidMount(() => {
    useCollapseAnimate(collapseDivRef, isExpand);
  }, isExpand);

  let parentKeys: any = [];
  let deletedParentKeys: any = [];

  const collectChildrenKeys = (node: any) => {
    if (!node.children) return [];
    return node.children.map((item: any) => [
      item.key,
      collectChildrenKeys(item),
    ]);
  };

  const onChecked = (isChecked: boolean) => {
    parentKeys = [];
    deletedParentKeys = [];

    const childrenKeys: string[] = deepFlatten(collectChildrenKeys(node));

    if (isChecked) {
      const addKeys = [...checkedKeys, node.key];
      setParentChecked(addKeys, node.parentKey);
      onCheck([...addKeys, ...parentKeys, ...childrenKeys]);
    } else {
      removeParentChecked(node.parentKey);
      onCheck(
        checkedKeys.filter(
          (key: any) =>
            key !== node.key &&
            childrenKeys.indexOf(key) < 0 &&
            deletedParentKeys.indexOf(key) < 0,
        ),
      );
    }
  };

  const setParentChecked = (addKeys: any, parentKey: any) => {
    if (!parentKey) return;
    const parent = sourceMap[parentKey];
    const findSameParentKey = Object.keys(sourceMap)
      .map(key => sourceMap[key])
      .filter(item => item.parentKey === parentKey)
      .every(item => addKeys.indexOf(item.key) > -1);

    if (findSameParentKey) {
      parentKeys.push(parentKey);
      if (parent.parentKey)
        setParentChecked([...addKeys, ...parentKeys], parent.parentKey);
    }
  };
  const removeParentChecked = (parentKey: any) => {
    if (!parentKey) return;
    const parent = sourceMap[parentKey];
    deletedParentKeys.push(parentKey);
    removeParentChecked(parent.parentKey);
  };

  const positionRef = useRef<string>();

  const onDragStart = (e: any) => {
    e.dataTransfer.setData('key', node.key);
  };

  const onDrop = (e: any) => {
    e.preventDefault();
    clearMoveClass(e.target.classList);
    const moveKey = e.dataTransfer.getData('key');
    const staticKey = node.key;
    if (moveKey === staticKey) return;
    regenerateTree(moveKey, staticKey);
  };
  const regenerateTree = (moveKey: any, staticKey: any) => {
    const copy = JSON.parse(JSON.stringify(source));
    const moveOne = sourceMap[moveKey];

    const f = (copy: any) => {
      copy.forEach((item: any, index: any) => {
        if (item.key === moveKey) copy.splice(index, 1);
        item.children && f(item.children);
      });
    };

    const f2 = (copy: any) => {
      for (let i = 0; i < copy.length; i++) {
        if (copy[i].key === staticKey) {
          if (positionRef.current === 'top') {
            copy.splice(i, 0, moveOne);
          }
          if (positionRef.current === 'middle') {
            if (copy[i].children) {
              copy[i].children.push(moveOne);
            } else {
              copy[i].children = [moveOne];
            }
          }
          if (positionRef.current === 'bottom') {
            copy.splice(i + 1, 0, moveOne);
          }
          break;
        }
        copy[i].children && f2(copy[i].children);
      }
    };
    f(copy);
    f2(copy);
    onDropEnd(copy);
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { height, top } = e.target.getBoundingClientRect();
    const cl = e.target.classList;
    if (e.pageY < top + height / 3) {
      positionRef.current = 'top';
      cl.add('x-tree-hover-top');
      cl.remove('x-tree-hover-middle');
      cl.remove('x-tree-hover-bottom');
    } else if (e.pageY > top + (height / 3) * 2) {
      positionRef.current = 'bottom';
      cl.add('x-tree-hover-bottom');
      cl.remove('x-tree-hover-top');
      cl.remove('x-tree-hover-middle');
    } else {
      positionRef.current = 'middle';
      cl.add('x-tree-hover-middle');
      cl.remove('x-tree-hover-top');
      cl.remove('x-tree-hover-bottom');
    }
  };

  const onDragLeave = (e: any) => {
    clearMoveClass(e.target.classList);
  };

  const clearMoveClass = (cl: any) => {
    cl.remove('x-tree-hover-top');
    cl.remove('x-tree-hover-middle');
    cl.remove('x-tree-hover-bottom');
  };

  return (
    <div className={sc('node')} key={node.key}>
      <div className="align-center">
        <span className={sc('icon')} onClick={() => setExpand()}>
          {node.children && node.children.length ? (
            <Icon name={isExpand ? 'caret_down' : 'caret_right'} />
          ) : (
            ''
          )}
        </span>
        <span onClick={() => onChecked(!isChecked)}>
          <span
            className={classNames(
              sc('checkbox'),
              isChecked ? sc('checkbox-checked') : '',
            )}
          >
            <span className={sc('checkbox-inner')}></span>
          </span>
          <DragContainer onDragStart={onDragStart}>
            {
              <DropContainer
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
              >
                <span className={sc('node-text')}>{node.text}</span>
              </DropContainer>
            }
          </DragContainer>
        </span>
      </div>
      <div
        className={classNames(sc('child'), !isExpand ? sc('collapse') : '')}
        ref={collapseDivRef}
      >
        {node.children?.map((sub: any) => (
          <TreeNode {...props} node={sub} key={sub.key} />
        ))}
      </div>
    </div>
  );
};

const DragContainer = ({ children, onDragStart }: any) => {
  return (
    <span draggable={true} onDragStart={onDragStart}>
      {children}
    </span>
  );
};

const DropContainer = ({ children, onDrop, onDragOver, onDragLeave }: any) => {
  return (
    <span onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>
      {children}
    </span>
  );
};

export default TreeNode;
