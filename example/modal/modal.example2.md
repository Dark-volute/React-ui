import React from 'react'
import { alert,confirm } from 'xReact';

export default function () {
    return (
            <div className='x-icon-example'>
                <Button onClick={() => {alert(
                'haha',
                () => {console.log('yes')})}}>alert</Button>
                <Button onClick={()=>confirm(
                'haha',
                ()=>{console.log('yes')},
                ()=> {console.log('no')} ) }>confirm</Button>
            </div>
    )
}