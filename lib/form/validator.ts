import {FormValue} from './form'

interface FormRule {
    required?: boolean
    max?: number
    min?: number
    pattern?: RegExp
    message?: string,
    validator?: (data: any) => void
}

type FormRules = {
    [key: string]: Array<FormRule>
}

export interface FormErrors {
    [k: string]: string[]
}

function isEmpty(value: any) {
    return value === '' || value === null || value === undefined
}


const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    const errors: FormErrors = {}

    const addErrors = (key: string, message: string): void => {
        errors[key] = Array.isArray(errors[key]) ? errors[key].concat([message]) : [message]
    }


    const callbackWrapper = function (key: any) {
        return function (error: Error) {
            if (error) {
                addErrors(key, error.message)
            }
        }
    }

    Object.keys(rules).forEach(key => {
        const value = formValue[key]
        rules[key].map(item => {
            if (item.required && isEmpty(value)) {
                const message = '必填'
                addErrors(key, message)
            }
            if (item.min && value.length < item.min) {
                const message = `不能小于${item.min}`
                addErrors(key, message)
            }

            if (item.max && value.length > item.max) {
                const message = `不能大于${item.max}`
                addErrors(key, message)
            }

            if (item.pattern && !item.pattern.test(value)) {
                const message = item.message || '正则不通过'
                addErrors(key, message)
            }

            if (item.validator) {
                const callback = callbackWrapper(key)
                item.validator.call(null, callback)
            }

        })

    })

    return errors
}


export default Validator