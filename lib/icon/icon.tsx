import React from 'react';
import './wechat.svg'
import './icon.scss'
import classNames from '../untils/classNames'


interface IconProps extends React.HTMLAttributes<HTMLElement>{
    name: string,
    fill? : string
}


const Icon: React.FunctionComponent<IconProps> = ({className ,style, name,fill ,...restProps}) => {
    return (
        <span  {...restProps} style={style} >
            <svg
                className={classNames('m-icon', className)} style={{fill}} >
            <use xlinkHref={`#${name}`}/>
        </svg>
        </span>
    )
}


export default Icon