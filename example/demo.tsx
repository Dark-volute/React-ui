import React, {useState, useCallback} from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";
import {Icon} from '../lib/index';


type UseToggle = (
    state: boolean
) => [
    boolean, // state
    (nextValue?: boolean) => void // toggle
    ];

const useToggle: UseToggle = state => {
    const [value, setValue] = useState<boolean>(state);

    const toggle = useCallback(
        (nextValue?: boolean) => {
            if (typeof nextValue !== 'undefined') {
                setValue(!!nextValue);
                return;
            }

            setValue(newValue => !newValue);
        },
        [setValue]
    );

    return [value, toggle];
}

export interface demoProps {
    code: any
}

const Demo: React.FunctionComponent<demoProps> = function (props) {
    const [on, toggle] = useToggle(false);
    return (
        <div className='demo-component'>
            <div className='demo-component__header'>
                <span className="demo-component__title">基础</span>
                <span className="demo-component__toggle" onClick={() => toggle()}>
                    <Icon name='expand' style={{fill:'green'}}/>
                </span>
            </div>
            {props.children}
            {on ? <Highlight {...defaultProps} code={props.code.default} language="jsx">
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className}> {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
              </pre>
                )}
            </Highlight>
                : ''}
        </div>
    )
}

export default Demo