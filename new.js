if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name');
    process.exit(1);
}
const componentname = process.argv[2];

const fs = require('fs')
const path = require('path')

fs.mkdirSync(`./lib/${componentname}`)
fs.writeFileSync(`./lib/${componentname}/${componentname}.tsx`,
    `import * as React from 'react'

const ${componentname}: React.FunctionComponent = () =>{
    return (
        <div>
            demo
        </div>
    )
}

export default ${componentname}`)

fs.writeFileSync(`./example/${componentname}.tsx`,
  `import React from 'react'
import {${componentname}} from '../lib/${componentname}/${componentname}';

export default  function(){
    return (
        <div>
            <${componentname}/>
        </div>
    )
}`)



console.log('DONE')
