import * as React from 'react';
import { useState } from 'react';
import Validator, { FormErrors } from './validator';
import Input from '../input/input';

export type FormValue = { [k: string]: any };

interface Props extends React.HTMLAttributes<HTMLElement> {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: any } }>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
}

const Form: React.FunctionComponent<Props> = props => {
  const formData = props.value;
  const [errors, setError] = useState<FormErrors>({});

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const validate = function(callback: any) {
      if (formData) {
        callback(new Error('xxx错误'));
      } else {
        callback();
      }
    };
    const rules = {
      username: [
        { required: true },
        { min: 3 },
        { pattern: /\d+/, message: '只能输入数字' },
      ],
      password: [{ required: true }, { max: 3 }, { validator: validate }],
    };

    const errors = Validator(formData, rules);
    setError(errors);
    props.onSubmit(e);
  };

  const onChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange({ ...formData, [name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      {props.fields.map(v => (
        <div key={v.label}>
          {v.label}
          <Input
            type={v.input.type}
            value={formData[v.name]}
            onChange={onChange.bind(null, v.name)}
          />
          {errors[v.name] && errors[v.name][0]}
        </div>
      ))}
    </form>
  );
};

export default Form;
