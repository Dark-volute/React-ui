import React, { useMemo, useState, useCallback } from 'react'

const Child = (props) => {
    console.log('child')
    return <div>{props.data}</div>
}

const Child2 = React.memo(Child)

export default () => {
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)

    const onChildClick = () => {}

    const onChildClick2 = useMemo(() => onChildClick, [])

   // const onChildClick2 = useCallback(onChildClick, [])
    return (
        <div>
            {n}
            <button onClick={ () => setN(n + 1)}>+1</button>
            <Child2 onClick={onChildClick2}/>
        </div>
    )
}