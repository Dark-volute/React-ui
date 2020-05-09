import React, { useEffect, useRef } from 'react'
import useToggle from "../hooks/useToggle";
import { TreeNodeProps } from './type'
import Icon from '../icon/icon';
import { createScopedClasses, classNames } from "../utils/classNames";
const sc = createScopedClasses('tree')


const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const useUpdate = (fn, dep) => {
    const isFirst = useRef(true)

    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false
            return
        }
        fn()
    }, [dep])
}

let moveKey;

const TreeNode: React.FC<TreeNodeProps> = (props) => {
    const { checkedKeys, onCheck, node, sourceMap, source, onDropEnd } = props

    const isChecked = checkedKeys.indexOf(node.key) > -1

    const [isExpand, setExpand] = useToggle(true)

    const collapseDivRef: any = useRef()

    useUpdate(() => {
        const d = collapseDivRef.current
        if (!d) return
        if (isExpand) {
            d.style.height = 'auto'
            const { height } = collapseDivRef.current.getBoundingClientRect()
            d.style.height = '0px'
            d.getBoundingClientRect()
            d.style.height = height + 'px'
            const y = () => {
                d.style.height = 'auto'
                d.removeEventListener('transitionend', y)
            }
            d.addEventListener('transitionend', y)
        } else {
            const { height } = d.getBoundingClientRect()
            d.style.height = height + 'px'
            d.getBoundingClientRect()
            d.style.height = '0px'
        }
    }, isExpand)

    let parentKeys: any = []
    let deletedParentKeys: any = []

    const collectChildrenKeys = (node) => {
        if (!node.children) return []
        return node.children.map(item => [item.key, collectChildrenKeys(item)])
    }


    const onChecked = (isChecked: boolean) => {
        parentKeys = []
        deletedParentKeys = []

        const childrenKeys:string[] = deepFlatten(collectChildrenKeys(node))

        if (isChecked) {
            const addKeys = [...checkedKeys, node.key]
            setParentChecked(addKeys, node.parentKey)
            onCheck([...addKeys, ...parentKeys, ...childrenKeys])
        } else {
            removeParentChecked(node.parentKey)
            onCheck(checkedKeys.filter(key => key !== node.key && childrenKeys.indexOf(key) < 0 && deletedParentKeys.indexOf(key) < 0))
        }
    }

    const setParentChecked = (addKeys, parentKey) => {
        if (!parentKey) return
        const parent = sourceMap[parentKey]
        const findSameParentKey = Object.keys(sourceMap).map(key => sourceMap[key]).filter(item => item.parentKey === parentKey).every(item => addKeys.indexOf(item.key) > -1)

        if (findSameParentKey) {
            parentKeys.push(parentKey)
            if (parent.parentKey) setParentChecked([...addKeys, ...parentKeys], parent.parentKey)
        }
    }

    const removeParentChecked = (parentKey) => {
        if (!parentKey) return
        const parent = sourceMap[parentKey]
        deletedParentKeys.push(parentKey)
        removeParentChecked(parent.parentKey)
    }

    const onDragStart = (e) => {
        moveKey = node.key
    }

    const onDrop = (e) => {
        e.preventDefault();
        e.persist();
        const staticKey = e.target.getAttribute('data-key')
        const { height, top } = e.target.getBoundingClientRect()
        let position;
        if (e.pageY < top + height / 3) {
            position = 'top'
        } else if (e.pageY > top + height / 3 * 2) {
            position = 'bottom'
        } else {
            position = 'middle'
        }
        if (moveKey === staticKey) return

        regenerateTree(moveKey, staticKey, position)
    }
    const regenerateTree = (moveKey, staticKey, position) => {
        const copy = JSON.parse(JSON.stringify(source))
        const moveOne = sourceMap[moveKey]

        const f = (copy) => {
            copy.forEach((item, index) => {
                if (item.key === moveKey) copy.splice(index, 1)
                item.children && f(item.children)
            })
        }

        const f2 = (copy) => {
            copy.forEach((item, index) => {
                if (item.key === staticKey) {
                    if (position === 'top') {
                        copy.splice(index, 0, moveOne)
                    }
                    if (position === 'middle') {
                        if (copy[index].children) {
                            copy[index].children.push(moveOne)
                        } else {
                            copy[index].children = [moveOne]
                        }
                    }
                    if (position === 'bottom') {
                        copy.splice(index + 1, 0, moveOne)
                    }
                }
                item.children && f2(item.children)
            })
        }
        f(copy)
        f2(copy)

        onDropEnd(copy)
    }

    const onDragOver = (e) => {
        e.preventDefault();
        e.persist();
        e.dataTransfer.dropEffect = "move";
    }

    return (
        <div className={sc('node')} key={node.key}>
            <div className='align-center'>
                {node.children && node.children.length ? <span className={sc('icon')} onClick={() => setExpand()}>{(isExpand ? <Icon name='caret_down' /> : <Icon name='caret_right' />)}</span> : ''}
                <span onClick={() => onChecked(!isChecked)} >
                    <span data-key={node.key}
                        className={classNames(sc('checkbox'), isChecked ? sc('checkbox-checked') : '')}>
                        <span className={sc('checkbox-inner')}></span>
                    </span>
                    <span data-key={node.key} draggable={true}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onDragStart={onDragStart}>{node.text}
                    </span>
                </span>
            </div>
            <div className={classNames(sc('child'), !isExpand ? sc('collapse') : '')} ref={collapseDivRef}>
                {node.children ?.map(sub => <TreeNode {...props} node={sub} key={sub.key} />)}
            </div>
        </div>
    )
}

export default TreeNode