import React, { useEffect , useRef} from 'react'
import useToggle from "../hooks/useToggle";
import { TreeNodeProps } from './type'

import {createScopedClasses, classNames} from "../utils/classNames";
const sc = createScopedClasses('tree')


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

const TreeNode: React.FC<TreeNodeProps> = (props) => {
    const {checkedKeys, onCheck, node, sourceMap} = props

    const isChecked = checkedKeys.indexOf(node.key) > -1

    const [isExpand, setExpand] = useToggle(true)

    const collapseDivRef:any = useRef()

    useUpdate(() => {
        const d = collapseDivRef.current
        if (!d) return
        if (isExpand) {
            d.style.height = 'auto'
            const { height }  = collapseDivRef.current.getBoundingClientRect()
            d.style.height = '0px'
            d.getBoundingClientRect()
            d.style.height = height + 'px'
            const y = () => {
                d.style.height = 'auto'
                d.removeEventListener('transitionend', y)
            }
            d.addEventListener('transitionend', y)
        } else {
            const { height }  = d.getBoundingClientRect()
            d.style.height = height + 'px'
            d.getBoundingClientRect()
            d.style.height = '0px'
        }
    },isExpand)

    let parentKeys:any = []
    let childKeys:any = []
    let deletedChildKeys:any = []
    let deletedParentKeys:any = []
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        parentKeys = []
        childKeys = []
        deletedChildKeys = []
        deletedParentKeys = []
        const isChecked = e.target.checked
        if (isChecked) {
            const addKeys = [...checkedKeys, node.key]
            setParentChecked(addKeys, node.parentKey)
            setChildChecked(node.key)
            onCheck([...addKeys, ...parentKeys, ...childKeys])
        } else {
            removeChildChecked(node.key)
            removeParentChecked(node.parentKey)
            onCheck(checkedKeys.filter(key => key !== node.key && deletedChildKeys.indexOf(key) < 0 && deletedParentKeys.indexOf(key) < 0))
        }
    } 

    const removeParentChecked = (parentKey) => {
        if (!parentKey) return
        const parent = sourceMap[parentKey]
        deletedParentKeys.push(parentKey)
        removeParentChecked(parent.parentKey)
    }

    const removeChildChecked = (key) => {
       Object.keys(sourceMap)
          .map(key => sourceMap[key])
          .filter(item => item.parentKey === key)
          .forEach(item => {
            deletedChildKeys.push(item.key)
            item.children && removeChildChecked(item.key)
          })
    }

    const setParentChecked = (addKeys, parentKey) => {
        if (!parentKey) return
        const parent = sourceMap[parentKey]
        const findSameParentKey =  Object.keys(sourceMap).map(key => sourceMap[key]).filter(item => item.parentKey === parentKey).every(item => addKeys.indexOf(item.key) > -1)

        if (findSameParentKey) {
            parentKeys.push(parentKey)
            if (parent.parentKey) setParentChecked([...addKeys, ...parentKeys], parent.parentKey)
        }
    }

    const setChildChecked = (key) => {
        Object.keys(sourceMap)
          .map(key => sourceMap[key])
          .filter(item => item.parentKey === key)
          .forEach(item => {
              childKeys.push(item.key)
              item.children && setChildChecked(item.key)
          })
    }

    return (
        <div className={sc('node')} key={node.key}>
            <div>
                <span className={sc('icon')} onClick={() => setExpand()}>{node.children && (isExpand ? '-' : '+')}</span>
                <label>
                    <input type='checkbox' checked={isChecked} onChange={onChange}/>
                    <span>{node.text}</span>
                </label>
            </div>
            <div className={classNames(sc('child'), !isExpand ? sc('collapse') : '')}  ref={collapseDivRef}>
                {node.children?.map(sub => <TreeNode {...props} node={sub} key={sub.key}/>)}
            </div>
        </div>
    )
}

export default TreeNode