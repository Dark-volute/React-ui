import React from 'react'
import {Button} from '../../lib/index';
import  Demo from '../demo'
const example1 = require('!!raw-loader!./button.example1.md')

export default  function(){
    return (
      <Demo code={example1}>
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