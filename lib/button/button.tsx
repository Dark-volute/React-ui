import * as React from 'react'
import './button.scss'
import {createScopedClasses} from "../utils/classNames";
const sc = createScopedClasses('button')


export type ButtonTypes = 'default' | 'primary' |  'ghost' |  'dashed' | 'danger' | 'link';


export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    type?: ButtonTypes,
    children: React.ReactDOM | string
}

const Button: React.FunctionComponent<ButtonProps> = ({ type , children, ...restProps}) =>{
    return (
            <button {...restProps}
                    className={sc('', type) }>{children}</button>
    )
}



export default Button