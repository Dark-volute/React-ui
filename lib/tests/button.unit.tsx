import * as React from 'react'
import * as renderer from 'react-test-renderer';
import Button from '../button'

describe('button test', () => {

    it('button 存在', () => {
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    })

})

