import React from 'react';
import './tree.scss'
import {
    mapChildren,
    conductCheck,
    arrAdd,
    arrDel
} from './utils';

import {createScopedClasses ,classNames} from "../utils/classNames";


const sc = createScopedClasses('tree')


export interface TreeNodeProps {
    Key?: any,
    initKey?: string,
    isHalfChecked?: boolean,
    isChecked?: boolean,
    isExpanded?: boolean,
    halfCheckedKeys?: any
    checkedKeys?: any,
    expandedKeys?:any,
    keyEntities?: any,
    onNodeClick?: any,
    updateExpanded?: any,
    isSingle?:boolean,
    title?:any,
    key: any,
    disabled? :boolean
}



class TreeNode extends React.Component<TreeNodeProps,any> {
    myShow: any

    constructor(props: TreeNodeProps) {
        super(props);
        this.myShow = React.createRef();

        this.onNodeClick = this.onNodeClick.bind(this);
        this.onSwitcherClick = this.onSwitcherClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            showHeight:this.myShow.current.clientHeight,
            nodeHeight:this.myShow.current.clientHeight
        })
    }


    renderTreeNode(child:any, key:any){
        return React.cloneElement(child, {
            key,
            Key: key,
            initKey: child.key,
            isHalfChecked: this.props.halfCheckedKeys.includes(key),
            isChecked: this.props.checkedKeys.includes(key),
            isExpanded: this.props.expandedKeys.includes(child.key),
            halfCheckedKeys: this.props.halfCheckedKeys,
            checkedKeys: this.props.checkedKeys,
            expandedKeys: this.props.expandedKeys,
            keyEntities: this.props.keyEntities,
            onNodeClick: this.props.onNodeClick,
            updateExpanded: this.props.updateExpanded,
            isSingle: !('children' in child.props)
        })
    }

    renderSwitcher() {
        return (
            <div className={classNames(sc('triangle') ,
                this.props.isSingle ?  'single' : '' ,
                this.props.isExpanded ?  'expaned' : '')}
                onClick = {this.onSwitcherClick}
            ></div>
        )
    }

    onNodeClick(node, e) {

        let halfCheckedKeys =  arrDel(this.props.halfCheckedKeys, this.props.Key).arr,
            checkedKeys = [...(this.props.checkedKeys)];

        let addNodeChild = (parentNode:any) => {

            checkedKeys = arrAdd(checkedKeys, parentNode.key);
            parentNode.childKey.forEach((key) => {
               addNodeChild(this.props.keyEntities[key]);
            })
        }
        let delNodeChild = (parentNode:any) => {
            checkedKeys = arrDel(checkedKeys, parentNode.key).arr;
            halfCheckedKeys = arrDel(halfCheckedKeys, parentNode.key).arr;
            parentNode.childKey.forEach((key) => {
                delNodeChild(this.props.keyEntities[key]);
            })
        }

        let delNodeParent = (node) => {
            checkedKeys = arrDel(checkedKeys, node.key).arr;
            if(node.parentKey) {
                delNodeParent(this.props.keyEntities[node.parentKey])
            }
        }

        if(checkedKeys.includes(this.props.Key)) {
            delNodeChild(this.props.keyEntities[this.props.Key]);
            delNodeParent(this.props.keyEntities[this.props.Key]);
        }else {
            addNodeChild(this.props.keyEntities[this.props.Key]);
        }

        const checkStatus = {checkedKeys, halfCheckedKeys};
        const checkedStatus = conductCheck(this.props.Key, checkStatus, this.props.keyEntities);

        this.props.onNodeClick(checkedStatus.halfCheckedKeys, checkedStatus.checkedKeys);
    }

    onSwitcherClick() {
        let expandedKeys;
        if(this.props.expandedKeys.includes(this.props.initKey)) {
            expandedKeys = arrDel(this.props.expandedKeys, this.props.initKey).arr;
        }else {
            expandedKeys = arrAdd(this.props.expandedKeys, this.props.initKey);
        }
        this.props.updateExpanded(expandedKeys);
    }

    renderCheckbox() {
        return (
            <input type="checkbox"
                   checked={this.props.isChecked}
                   className={sc('checkbox')}
                   disabled={this.props.disabled}
                   onChange = {(e) => this.onNodeClick(this.props, e)}
            ></input>
        )
    }

    renderItem() {
        return (
            <span className={sc('item')}>
                {this.props.title}
            </span>
        );
    }
    renderChildren() {
        const { children, Key } = this.props;
        return (
            <div className={classNames(this.props.isExpanded ? sc('show') : sc('hidden'))}
                ref={this.myShow}
            >
                {mapChildren(children,(item, index) => this.renderTreeNode(item, Key+"-"+index))}
            </div>
        );
    }

    render() {
        return (
            <div className={sc('node')}>
                {this.renderSwitcher()}
                {this.renderCheckbox()}
                {this.renderItem()}
                {this.renderChildren()}
            </div>
        )
    }
}

export default TreeNode;