import * as React from 'react'
import {ReactNode} from 'react'
import './carousel.scss'
import {Icon} from '../index'

import {createScopedClasses ,classNames} from "../utils/classNames";
const sc = createScopedClasses('carousel')

interface CarouselProps extends React.HTMLAttributes<HTMLElement>{
    children: Array<ReactNode>,
    index?: number,
}


export interface CarouselState {
    currentIndex: number,
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
    static defaultProps = {
        index:0
    };

    panelRef:React.RefObject<any>

    max: number

    constructor(props: CarouselProps) {
        super(props);

        this.state = {
            currentIndex: this.props.index || 0
        }
        this.panelRef = React.createRef();
        this.max = this.props.children.length
    }

    get index(){
        return this.state.currentIndex
    }

    get preIndex(){
        return (this.index - 1 + this.max) % this.max
    }

    get nextIndex(){
        return (this.index + 1) % this.max
    }


    fade(fromNode:any,toNode:any ){

    }

    setPanels(nextIndex:number, index:number){
        const panels =  this.panelRef.current.children
        const fromNode = panels[index]
        const toNode = panels[nextIndex]
        this.fade(fromNode,toNode)
    }

    setDot(nextIndex:number){
        this.setPanels(nextIndex, this.index)
        this.setState({
            currentIndex: nextIndex
        })
    }

    next(){
        this.setPanels(this.nextIndex, this.index)
        this.setState({
            currentIndex:  this.nextIndex
        })
    }

    pre(){
        this.setPanels(this.preIndex, this.index)
        this.setState({
            currentIndex: this.preIndex
        })
    }

    render(){
        return (
            <div className={sc()}>
                <div className={sc('panel')} ref={this.panelRef}>
                    {this.props.children.map((item, i) => {
                        return <div key={i} className={classNames(sc('panel-item'),this.state.currentIndex === i ? 'active' : '')}>{item}</div>
                    })}
                </div>
                <div className={classNames(sc('control-left'), sc('control'))}
                     onClick={() => this.pre()}><Icon name='arrow-left' style={{fill: '#fff'}}/></div>
                <div className={classNames(sc('control-right'), sc('control'))}
                     onClick={() => this.next()}><Icon name='arrow-right' style={{fill: '#fff'}}/></div>
                <ul className={sc('dot-wrapper')}>
                    {this.props.children.map((item, i) => {
                        return <li key={i}
                                   className={classNames(sc('dot-item'),this.state.currentIndex === i ? 'active' : '')}
                                   onClick={() => this.setDot(i)}></li>
                    })}
                </ul>
            </div>
        )
    }
}




export default Carousel