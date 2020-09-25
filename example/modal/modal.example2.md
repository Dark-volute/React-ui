import React from 'react'
import { alert,confirm } from 'xReact';

export default function () {
return (
<div className='x-icon-example'>
<Index onClick={() => {alert(
'haha',
() => {console.log('yes')})}}>alert</Index>
<Index onClick={()=>confirm(
'haha',
()=>{console.log('yes')},
()=> {console.log('no')} ) }>confirm</Index>
</div>
)
}
