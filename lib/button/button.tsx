import * as React from 'react'
import './button.scss'
import {classNames, createScopedClasses} from "../untils/classNames";
const sc = createScopedClasses('x-button')

export type ButtonTypes = 'default' | 'primary' |  'ghost' |  'dashed' | 'danger' | 'link';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    type?: ButtonTypes,
    children: React.ReactDOM | string
}

const Button: React.FunctionComponent<ButtonProps> = ({ type , children, ...restProps}) =>{
    return (
            <button {...restProps}
                    className={classNames(sc(), sc(type))}>{children}</button>
    )
}

export default Button