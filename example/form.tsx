import React, {useState } from 'react'
import Form, {FormValue} from '../lib/form/form';
import {Button} from "../lib";

export default function () {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    })

    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'text'}}
    ])

    const onSubmit =  () => {
        console.log(formData)
    }

    return (
        <div>
            <Form value={formData} fields={fields}
                  onChange={(formdata) => {setFormData(formdata)}}
                  onSubmit={onSubmit}/>
            <Button>提交</Button>
        </div>
    )
}
