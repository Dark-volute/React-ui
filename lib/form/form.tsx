import * as React from 'react';
import {ReactFragment} from 'react'

export type formValue = {[k: string]: any}


interface Props extends React.HTMLAttributes<HTMLElement> {
    value: formValue;
    fields: Array<{name: string, label: string, input: {type: string }}>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChange: (value: formValue) => void
}


const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }

    const onChange  = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({...formData, [name]: e.target.value})
    }

    return (
        <form onSubmit={onSubmit}>
            {props.fields.map(v =>
                <div key={v.label}>
                    {v.label}
                    <input type={v.input.type} value={formData[v.name]} onChange={onChange.bind(null,v.name)}/>
                </div>
            )}
            <div>
                {props.buttons}
            </div>
        </form>
    )
}


export default Form