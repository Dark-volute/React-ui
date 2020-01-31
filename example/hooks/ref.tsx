// import React, { useEffect, useState, useRef } from 'react'

// // useEffect 对环境的改变

// const Child1 = () => {
//     const ref = useRef(0)

//     const [n, setN] = useState(0)

//     const log = () => setTimeout( () => console.log(ref.current), 2000)


//     return <div>
//         {n}
//         <button onClick={() => ref.current++}>+1</button>
//         <button onClick={log}>log</button>
//     </div>
// }


// export default () => {
   
//     return (
//         <div>
//             <Child1/>
//         </div>
//     )
// }


import React, { useState, useEffect ,useRef , useImperativeHandle, } from 'react'

// useEffect 对环境的改变

const Child1 = (props, ref) => {
    const [n, setN] = useState(0)
    useImperativeHandle(ref, () => ({
        x: setN
    }))


    return <div ref={ref}>{n}</div>
}
 
const Child2 = React.forwardRef(Child1)


export default () => {
   const ref = useRef(null)
   useEffect(() => {
    console.log(ref.current.x(100))
   })
    return (
        <div>
        <div className='border2'>
        <Child2 ref={ref}/>
        </div>
        <div className='border'>
            <Child2 ref={ref}/>
        </div>
        </div>
    )
}