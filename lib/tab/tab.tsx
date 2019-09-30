import * as React from 'react'
import {useState, useRef, useEffect, RefObject} from 'react'
import './tab.scss'
import {classNames, createScopedClasses} from "../utils/classNames";


const sc = createScopedClasses('tabs')

export interface tabProps {
    defaultActiveKey: number,
    onChange: (e:React.MouseEvent ,index: number) => void
}


export interface tabPaneProps {
    tab: string
    index: number
    disabled?: boolean
}



export const Tab: React.FunctionComponent<tabProps> = (props) => {
    let [active, setActive] = useState<number>(props.defaultActiveKey)
    let [pos, movePos] = useState(0)

    let barStyle = {
        transform: `translateX(${pos}px)`
    }


    const onChange = (e:React.MouseEvent ,index: number) => {
        changeTab(index)
        props.onChange(e, index)
    }

    const changeTab = (index: number) => {
        setActive(index)
        movePos(tabRef.current.children[index -1 ].offsetLeft)
    }

    let barRef:RefObject<any> = useRef()
    let tabRef:RefObject<any> = useRef()


    useEffect(() => {
        changeTab(props.defaultActiveKey)
    }, [props.defaultActiveKey]);

    useEffect(() => {
        barRef.current.style.width =  tabRef.current.children[active - 1].offsetWidth + 'px'
    }, [active]);

    return (
        <div className={classNames(sc())}>
            <div ref={tabRef}>
                {(props.children as any[]).map(child => {
                    let {tab, disabled} = child.props
                    return (
                        <span key={child.props.index}
                              onClick={(e) => !disabled ? onChange(e, child.props.index) : null}
                              className={
                                  classNames(sc('title'),
                                  active === child.props.index ? 'title-active' : '',
                                  disabled && 'disabled')}>
                            {tab}
                        </span>)
                })}
            </div>
            <div className={sc('moveBar')} style={barStyle} ref={barRef}></div>
            <div className={sc('divideLine')}></div>
            <div>
                {(props.children as any[]).map(child => {
                    return (
                        <div key={child.props.index}
                             className={classNames(sc('pane'), active === child.props.index ? 'pane-active' : '')}>
                            {child}
                        </div>)
                })}
            </div>
        </div>
    )
}

export const TabPane: React.FunctionComponent<tabPaneProps> = (props) => {
    return (
        <div>{props.children}</div>
    )
}