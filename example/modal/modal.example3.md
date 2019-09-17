import React from 'react'
import {modal} from 'xReact';

export default function () {
   const s = () => {
        const closer = modal(<div>
            hi
            <Button onClick={e => closer()}>close</Button>
        </div>);
    };
    return (
            <div>
                 <Button onClick={ s }>自定义button</Button>
            </div>
    )
}