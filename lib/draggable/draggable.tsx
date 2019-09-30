import React, {useState, useCallback, useMemo, useEffect} from 'react';

const POSITION = {x: 0, y: 0};

interface DraggableProps {
    children: React.ReactNode,
    onDragStart?: (e: React.MouseEvent) => void,
    onDrag?: (e: React.MouseEvent) => void,
    onDragEnd?:  (e: MouseEvent) => void,
}

type PosType =  {x: number, y: number}

interface DraggableStates {
    isDragging: boolean,
    currentPos: PosType,
    translation: PosType
}

let origin: PosType = POSITION
let firstClick:boolean = true

const Draggable:React.FunctionComponent<DraggableProps> = ({children,onDragStart ,onDrag, onDragEnd}) => {
    const [state, setState] = useState<DraggableStates>({
        isDragging: false,
        currentPos: POSITION,
        translation: POSITION
    });

    const handleMouseDown= useCallback((e:React.MouseEvent) => {
        const {clientX, clientY} = e

        if(firstClick)  {
            origin = { x:clientX,  y:clientY };
            firstClick = false
        }

        setState(state => ({
            ...state,
            isDragging: true,
            origin: {x: clientX, y: clientY}
        }));

        onDragStart && onDragStart(e)
    },[]);

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e
        const translation = {x: clientX - origin.x, y: clientY - origin.y};
        setState(state => ({
            ...state,
            translation
        }));

        onDrag && onDrag(e);
    }

    const handleMouseUp = useCallback((e:MouseEvent) => {

        setState(state => ({
            ...state,
            // translation:{x:0,y:0},
            isDragging: false
        }));

        onDragEnd && onDragEnd(e);
    }, [onDragEnd]);

    useEffect(() => {
        if (state.isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

    }, [state.isDragging]);

    const styles = useMemo<React.CSSProperties>(() => ({
        cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
        transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
        transition: state.isDragging ? 'none' : 'transform 500ms',
        zIndex: state.isDragging ? 2 : 1,
        position: state.isDragging ? 'absolute' : 'relative'
    }), [state.isDragging, state.translation]);

    return (
        <div style={styles} onMouseDown={handleMouseDown}>
            {children}
        </div>
    );
};

export default Draggable;