// import React, { useEffect, useState, useRef } from 'react'

// // useEffect 对环境的改变

// const Child1 = () => {
//     const ref = useRef(0)

//     const [n, setN] = useState(0)

//     const log = () => setTimeout( () => console.log(ref.current), 2000)

//     return <div>
//         {n}
//         <Index onClick={() => ref.current++}>+1</Index>
//         <Index onClick={log}>log</Index>
//     </div>
// }

// export default () => {

//     return (
//         <div>
//             <Child1/>
//         </div>
//     )
// }

import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';

// useEffect 对环境的改变

const Child1 = (props, ref) => {
  const [n, setN] = useState(0);
  useImperativeHandle(ref, () => ({
    x: setN,
  }));

  return <div ref={ref}>{n}</div>;
};

const Child2 = React.forwardRef(Child1);

export default () => {
  const ref = useRef(null);
  useEffect(() => {});
  return (
    <div>
      <div className="border2">
        <Child2 ref={ref} />
      </div>
      <div className="border">
        <Child2 ref={ref} />
      </div>
    </div>
  );
};
