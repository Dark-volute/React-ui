import { useEffect, RefObject,useState } from 'react';
import {State} from "./useMouse";

let isMoving:boolean = false

const useDrag = (ref: RefObject<HTMLElement> ) => {
    if (process.env.NODE_ENV === 'development') {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useDrag expects a single ref argument.');
        }
    }

    const [state, setState] = useState<State>({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0
    });

    useEffect(() => {
        const onmouseDown = () => {
            isMoving = true
        }

        const onmouseMove = (event: MouseEvent)=> {
            if(!isMoving) return
            if (ref && ref.current) {
                const { left, top, width: elW, height: elH } = ref.current.getBoundingClientRect();
                const posX = left + window.scrollX;
                const posY = top + window.scrollY;
                const elX = event.pageX - posX;
                const elY = event.pageY - posY;

                ref.current.style.position = 'absolute'
                ref.current.style.left = event.pageX - elW/2 + 'px'
                ref.current.style.top = event.pageY - elH/2 + 'px'

                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX,
                    posY,
                    elX,
                    elY,
                    elH,
                    elW,

                });
            }
        }


        const onmouseUp = (event: MouseEvent) :void=> {
            isMoving = false
        }


        if (ref && ref.current) {
            ref.current.addEventListener('mousedown', onmouseDown);
            document.addEventListener('mousemove', onmouseMove)
            document.addEventListener('mouseup', onmouseUp)
        }

        return () => {
            if (ref && ref.current) {
                document.removeEventListener('mousemove', onmouseMove);
                document.removeEventListener('mouseup', onmouseUp);
            }
        }
    }, [ref.current])
    return state

}


export default  useDrag