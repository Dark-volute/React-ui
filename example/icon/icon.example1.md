import React from 'react'
import {Icon} from 'xReact';

export default function () {
    return (
            <div className='x-icon-example'>
                <Icon name='wechat' style={{fill: 'green'}}/>
                <Icon name='arrow-left'/>
                <Icon name='arrow-right'/>
                <Icon name='logo' style={{width:'30px',height:'30px'}}/>
                <Icon name='github'/>
            </div>
    )
}