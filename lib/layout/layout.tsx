import * as React from 'react'
import './layout.scss'
import {createScopedClasses ,classNames} from '../untils/classNames'


const sc = createScopedClasses('x-layout')

export interface props extends React.HTMLAttributes<HTMLElement>{

}

export const Layout: React.FunctionComponent<props> = (props) => {
    const {className, ...rest} = props

    const hasAside = (props.children as Array<React.ReactElement>).some(node => node.type === Aside)

    return (
        <div className={classNames(sc(), className, hasAside && 'hasAside')} {...rest}>
            {rest.children}
        </div>
    )
}

export const Content: React.FunctionComponent<props> = (props) =>{
    const {className, ...rest} = props
    return (
        <div className={classNames(sc('content'), className )} {...rest}>
            {rest.children}
        </div>
    )
}

export const Header: React.FunctionComponent<props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={classNames(sc('header'), className)} {...rest}>
            {rest.children}
        </div>
    )
}

export const Footer: React.FunctionComponent<props> = (props) =>{
    const {className, ...rest} = props
    return (
        <div className={classNames(sc('footer'), className)} {...rest}>
            {rest.children}
        </div>
    )
}

export const Aside: React.FunctionComponent<props> = (props) =>{
    const {className, ...rest} = props
    return (
        <div className={classNames(sc('aside'), className)} {...rest}>
            {rest.children}
        </div>
    )
}


