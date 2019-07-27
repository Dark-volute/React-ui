import * as React from 'react';
import './wechat.svg'
import './logo.svg'
import './github.svg'
import './expand.svg'
import './icon.scss'
import {classNames} from '../untils/classNames'


export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: string,
    style?: any
}


const Icon: React.FunctionComponent<IconProps> = ({className, style, name , ...restProps}) => {
    return (
        <span  {...restProps}>
            <svg
                className={classNames('m-icon', className)} style={style}>
            <use xlinkHref={`#${name}`}/>
        </svg>
        </span>
    )
}


export default Icon