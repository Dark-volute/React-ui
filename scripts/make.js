if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name');
    process.exit(1);
}
const componentname = process.argv[2];

const componentnameUpper = componentname.replace(/\b[a-z]/g, char => char.toUpperCase())


const fs = require('fs')
const path = require('path')

fs.mkdirSync(`./lib/${componentname}`)
fs.writeFileSync(`./lib/${componentname}/${componentname}.tsx`,
    `import * as React from 'react'

const ${componentnameUpper}: React.FunctionComponent = () =>{
    return (
        <div>
            demo
        </div>
    )
}

export default ${componentnameUpper}`)

fs.writeFileSync(`./example/${componentname}.tsx`,
  `import React from 'react'
import ${componentnameUpper} from '../lib/${componentname}/${componentname}';

export default  function(){
    return (
        <div>
            <${componentnameUpper}/>
        </div>
    )
}`)



console.log('DONE')
