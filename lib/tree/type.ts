export type TreeNode = {
    key: string,
    parentKey?: string,
    text: string,
    checked?: boolean
    children?: TreeNode[]
}

export type TreeProps = {
    source: TreeNode[],
    checkedKeys: string[],
    onCheck: (selected: string[]) => void
}

export type TreeNodeProps = TreeProps & {
    node: TreeNode,
    sourceMap: object
}