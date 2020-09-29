import * as React from 'react'
import './button.scss'
import {createScopedClasses} from "../utils/classNames";
const sc = createScopedClasses('button')

export const tuple = <T extends string[]>(...args: T) => args;

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');

export type ButtonType = (typeof ButtonTypes)[number];


export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    type?: ButtonType,
    children: React.ReactDOM | string
}

const Button: React.FunctionComponent<ButtonProps> = ({ type , children, ...restProps}) =>{
    return (
            <button {...restProps}
                    className={sc('', type) }>{children}</button>
    )
}



export default Button