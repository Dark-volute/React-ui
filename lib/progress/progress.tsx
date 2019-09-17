import * as React from 'react'
import {RefObject, useEffect, useState} from 'react'
import useDrag from '../hooks/useDrag'


export interface ProgressProps {
    percent?: number
}

const Progress: React.FunctionComponent<ProgressProps> = (props) => {
    const percent = props.percent || 0

    const dotRef: RefObject<any> = React.useRef(null);
    const wrapper: RefObject<any> = React.useRef(null);


    const {docX} = useDrag(dotRef)

    const OFFSET: number = 10
    const MAX_WIDTH: number = 180

    const [linePosX, setLinePosX] = useState<number>(percent)
    const [dotPosX, setDotPosX] = useState<number>(percent + OFFSET)

    const mounted:{ current:boolean } = React.useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            let {left} = wrapper.current.getBoundingClientRect();

            let linePosX = docX - left - OFFSET
            let dotPosX = docX - left

            dotPosX = Math.max(dotPosX, OFFSET)
            dotPosX = Math.min(dotPosX, MAX_WIDTH)
            linePosX = Math.max(linePosX, 0)
            linePosX = Math.min(linePosX, MAX_WIDTH)

            setDotPosX(dotPosX)
            setLinePosX(linePosX)

        }
    }, [docX]);


    return (
        <div>
            <svg width="200" height="60" viewBox="0 0 200 20" ref={wrapper}>
                <line x1="10" y1="10" x2="180" y2="10" fill="none" strokeWidth="8" stroke="#f5f5f5"
                      strokeLinecap="round"/>
                <line x1="10" y1="10" x2="180" y2="10" fill="none" strokeWidth="8" stroke="#52c41a"
                      strokeDasharray="180" strokeDashoffset={MAX_WIDTH - linePosX} strokeLinecap="round"
                      id="lineInner"/>
                <circle ref={dotRef} cx={dotPosX} cy="10" r="8" fill="#fff" stroke="#52c41a" strokeWidth="4"/>
            </svg>
            {(linePosX)}
        </div>
    )
}


export default Progress