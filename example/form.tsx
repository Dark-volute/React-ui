import React, {useState, Fragment} from 'react'
import Form, {FormValue} from '../lib/form/form';


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
                  buttons={
                      <Fragment>
                          <button type="submit">提交</button>
                          <button>重置</button>
                      </Fragment>
                  }
                  onChange={(formdata) => {setFormData(formdata)}}
                  onSubmit={onSubmit}/>
        </div>
    )
}
