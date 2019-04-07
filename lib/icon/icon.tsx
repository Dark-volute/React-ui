import * as React from 'react';
import './wechat.svg'
import './icon.scss'
import classNames from '../untils/classNames'

interface IconProps extends React.SVGAttributes<SVGElement>{
    icon: String;
}


const Icon: React.FunctionComponent<IconProps> = ({className, icon ,...restProps}) => {
    return (
        <svg {...restProps} className={classNames('m-icon', className)}>
            <use xlinkHref={`#${icon}`} />
        </svg>
    )
}

export default Icon