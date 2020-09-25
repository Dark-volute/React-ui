import React from 'react'
import {modal} from 'xReact';

export default function () {
const s = () => {
const closer = modal(<div>
hi
<Index onClick={e => closer()}>close</Index>
</div>);
};
return (
<div>
<Index onClick={ s }>自定义 button</Index>
</div>
)
}
