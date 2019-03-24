import * as React from 'react'
import * as ReactDom from 'react-dom'

import Icon from './icon'

const fn:React.MouseEventHandler = (e)=>{console.log(e)}

ReactDom.render(<div>
    <Icon icon='wechat' onClick={fn} />
</div>, document.getElementById('root'))
