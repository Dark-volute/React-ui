import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";

export default function () {
    const code =  `npm install sun-xui
    
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Alert } from 'sun-xui'`
    return (
        <div style={{background: '#f2f4f5',width:'60%'}}>
            <Highlight {...defaultProps} code={code} language="jsx">
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} > {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
              </pre>
                )}
            </Highlight>
        </div>
    )
}