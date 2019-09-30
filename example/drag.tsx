import React from 'react'
import {Draggable} from '../lib/';

export default  function(){

    const style = {
        height:200,
        width:200,
        border: '1px solid #000'
    }
    const onDragEnd = (e) => {
    }
    const onDrag = (e) => {

    }
    return (
        <div>
            <Draggable onDrag={onDrag} onDragEnd={onDragEnd}>
               <div style={style}>Draggable1</div>
            </Draggable>
        </div>
    )
}