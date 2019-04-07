import classNames from '../../lib/untils/classNames'

describe('classNames', () => {

    it('接受一个 className', () => {
        const result = classNames('a')
        expect(result).toEqual('a')
    })

    it('接受多个 className', () => {
        const result = classNames('a', 'b')
        expect(result).toEqual('a b')
    })
    it('不接受特殊值 className', () => {
        const result = classNames('a', undefined, '中文', '')
        expect(result).toEqual('a 中文')
    })


})

