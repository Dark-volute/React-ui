import * as React from 'react'
import {useState, useRef, useEffect} from 'react'
import './tab.scss'
import {classNames, createScopedClasses} from "../untils/classNames";


const sc = createScopedClasses('x-tabs')

interface tabProps {
    defaultActiveKey: number
}


interface tabPaneProps {
    tab: string
    index: number
}



export const Tab: React.FunctionComponent<tabProps> = (props) => {
    let [active, setActive] = useState<number>(props.defaultActiveKey)
    let [pos, movePos] = useState(0)

    let barStyle = {
        transform: `translateX(${pos}px)`
    }

    const changeTab = (e:React.MouseEvent ,index: number) => {
        setActive(index)
        movePos(tabRef.current.children[index -1 ].offsetLeft)
    }

    let barRef:React.RefObject<any> = useRef()
    let tabRef:React.RefObject<any> = useRef()

    useEffect(() => {
        barRef.current.style.width =  tabRef.current.children[active - 1].offsetWidth + 'px'
    }, [active]);

    return (
        <div className={classNames(sc())}>
            <div ref={tabRef}>
                {(props.children as any[]).map(child => {
                    let tab = child.props.tab
                    return (
                        <span key={child.props.index}
                              onClick={(e) => changeTab(e, child.props.index)}
                              className={classNames(sc('title'), active === child.props.index ? 'title-active' : '')}>
                            {tab}
                        </span>)
                })}
            </div>
            <div className={sc('bar')} style={barStyle} ref={barRef}></div>
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