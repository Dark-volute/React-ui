import React, { useEffect, useState, useLayoutEffect } from 'react'

// useEffect 对环境的改变

export default () => {
    const [n, setN] = useState(0)

    useEffect(() => {
        console.log('first')
        setN(100)
    }, [])

    useEffect(() => {
        console.log('later')
    }, [n])

    return (
        <div>
            <span>{n}</span>
            <button onClick={() =>setN(n + 1)}>+1</button>
        </div>
    )
}