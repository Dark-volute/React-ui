import React from 'react'
import {Button} from '../../lib/index';
import  Demo from '../demo'
const example1 = require('!!raw-loader!./button.example1.md')

export default  function(){
    return (
      <Demo code={example1}
            title='按钮类型'
            content='按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮'>
          <div className='x-buttton-demo'>
              <Button type='primary'>primary</Button>
              <Button>default</Button>
              <Button type='dashed'>dashed</Button>
              <Button type='danger'>danger</Button>
              <Button type='link'>link</Button>
          </div>
      </Demo>
    )
}