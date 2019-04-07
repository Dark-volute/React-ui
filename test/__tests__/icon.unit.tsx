import * as rendererer from 'react-test-renderer'
import * as React from 'react'
import Icon from '../../lib/icon/icon'
import { mount } from 'enzyme'

describe('icon', () => {

    it('render successfully', () => {
        const json = rendererer.create(<Icon icon='wechat'/>).toJSON()
        expect(json).toMatchSnapshot()
    })

    it('click successfully', () => {
        const fn = jest.fn()
        const component = mount(<Icon icon='wechat' onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
    })

})

