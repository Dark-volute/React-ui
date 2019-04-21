import * as rendererer from 'react-test-renderer'
import * as React from 'react'
import Icon from '../../lib/icon/icon'
import { mount } from 'enzyme'

describe('icon', () => {

    it('render successfully', () => {
        const json = rendererer.create(<Icon name='wechat'/>).toJSON()
        expect(json).toMatchSnapshot()
    })

    it('click successfully', () => {
        const fn = jest.fn()
        const component = mount(<Icon name='wechat' onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
    })

})

