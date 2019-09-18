import React from 'react';
import TreeNode , {TreeNodeProps} from './tree-node';
import {
    convertTreeToEntities,
    convertDataToTree
} from './utils'



type NodeDate = {
    title: string,
    key: string,
    parent?: string | null,
    children?: string[],
    isExpanded?: boolean,
    isChecked?: boolean
}

type TreeData = {
    [key: string]: NodeDate
}

type KeyEntities = {
    childKey: string[]
    disabled: boolean
    key: string
    parentKey:string
}

type TreeNodes = React.ReactNode | Array<React.ReactNode>

interface TreeStates {
    halfCheckedKeys? : string[],
    checkedKeys?:  string[],
    expandedKeys?: string[],
    keyEntities?: KeyEntities,
    treeNodes?: TreeNodes
}





interface TreeProps extends React.HTMLAttributes<HTMLElement>{
    treeData?: TreeData,
    defaultExpandedKeys?: string[],
}



class Tree extends React.Component<TreeProps, TreeStates> {

    static TreeNode: React.ComponentClass<TreeNodeProps>

    constructor(props: TreeProps) {
        super(props);

        this.state = ({
            halfCheckedKeys: [],
            checkedKeys: []
        })

        this.renderTreeNode = this.renderTreeNode.bind(this);
        this.onNodeClick = this.onNodeClick.bind(this);
        this.updateExpanded = this.updateExpanded.bind(this);
    }

    static getDerivedStateFromProps(props: TreeProps, state: TreeStates) {

        function shouldSetState(name: string) {
            return !(name in state);
        }
        const {treeData} = props;
        let treeNodes: TreeNodes,
            newState:any = {};
        if(shouldSetState('treeNodes')) {
            if(treeData) {
                let temp = convertDataToTree(treeData);
                treeNodes = temp.treeNode;
                newState.expandedKeys = temp.defaultExpanded;
            }else {
                treeNodes = props.children;
                newState.expandedKeys  = props.defaultExpandedKeys || []
            }
            newState.treeNodes = treeNodes;
            const entities = {};
            if(Array.isArray(treeNodes)) {
                for(let i = 0, len = treeNodes.length; i < len; i++) {
                    const node = treeNodes[i];
                    convertTreeToEntities(node, i+"", entities, null);
                }
            }
            newState.keyEntities = entities;
            return newState;
        }

        return null;
    }


    renderTreeNode(child:any, key:any){
        return React.cloneElement(child, {
            Key: key,
            initKey: child.key,
            isHalfChecked: this.state.halfCheckedKeys && this.state.halfCheckedKeys.includes(key),
            isChecked: this.state.checkedKeys && this.state.checkedKeys.includes(key),
            isExpanded: this.state.expandedKeys && this.state.expandedKeys.includes(child.key),
            halfCheckedKeys: this.state.halfCheckedKeys,
            checkedKeys: this.state.checkedKeys,
            expandedKeys: this.state.expandedKeys,
            keyEntities: this.state.keyEntities,
            onNodeClick: this.onNodeClick,
            updateExpanded: this.updateExpanded,
            isSingle: !('children' in child.props)
        })
    }

    onNodeClick(halfCheckedKeys:any, checkedKeys:any) {
        this.setState({
            halfCheckedKeys,
            checkedKeys
        })
    }

    updateExpanded(expandedKeys:any) {
        this.setState({
            expandedKeys
        })
    }

    render() {
        const { treeNodes } = this.state;
        return (
            <div>
                { Array.isArray(treeNodes) ? treeNodes.map((item:any, index:any) => this.renderTreeNode(item, index+"")) : treeNodes}
            </div>
        )
    }
}

Tree.TreeNode = TreeNode;

export default Tree;