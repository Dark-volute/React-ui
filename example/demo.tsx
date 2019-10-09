import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";
import {Icon} from '../lib/index';
import useToggle from '../lib/hooks/useToggle'

export interface demoProps {
    code: any,
    title? :string,
    content?: string
}

const Demo: React.FunctionComponent<demoProps> = function (props) {
    const [on, toggle] = useToggle(false);
    return (
        <div className='demo-component'>
            <div className='demo-component__view'>{props.children}</div>
            <div className='demo-component__describe'>
                <span className="demo-component__title">{props.title || '基础'}</span>
                <span className='demo-component__content'>{props.content || '描述'}</span>
                <span className="demo-component__toggle" onClick={() => toggle()}>
                    <Icon name='expand'/>
                </span>
            </div>
            {on ?  <div className='demo-component__code'><Highlight {...defaultProps} code={props.code.default} language="jsx">
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={style}> {tokens.map((line, i) => (
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
                : ''}
        </div>
    )
}

export default Demo