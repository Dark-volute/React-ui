import React, { useState } from 'react'
import Tree from '../lib/tree/tree';

export default  function(){
    const [source, setSource] = useState([
        {
            key: '1',
            text: '1',
            children:[
                {
                    key: '1-1',
                    text: '1-1',
                    children:[
                        {
                            key: '1-1-1',
                            text: '1-1-1',
                        }
                    ]
                },
                {
                    key: '1-2',
                    text: '1-2',
                    children:[
                        {
                            key: '1-2-1',
                            text: '1-2-1',
                        },
                        {
                            key: '1-2-2',
                            text: '1-2-2',
                        }
                    ]
                }
            ]
        },
        {
            key: '2',
            text: '2',
            children:[
                {
                    key: '2-1',
                    text: '2-1',
                },
                {
                    key: '2-2',
                    text: '2-2',
                }
            ]
        }
    ])

    const [checkedKeys, setCheckedKeys] = useState([])
    const onCheck = (keys) => {
        setCheckedKeys(keys)
    }

    const dropEnd = (source) => {
        console.log(source)
        setSource(source)
    }
    return (
        <div>
            <Tree source={source} checkedKeys={checkedKeys} onCheck={onCheck} onDropEnd={dropEnd}/>
        </div>
    )
}