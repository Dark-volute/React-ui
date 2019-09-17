import React from 'react'
import {Icon} from '../../lib/index';
import  Demo from '../demo'
const example1 = require('!!raw-loader!./icon.example1.md')

export default function () {
    return (
      <Demo code={example1}>
          <div className='x-icon-example'>
              <Icon name='wechat' style={{fill: 'green'}}/>
              <Icon name='arrow-left'/>
              <Icon name='arrow-right'/>
              <Icon name='logo' style={{width:'30px',height:'30px'}}/>
              <Icon name='github'/>
          </div>
      </Demo>
    )
}


