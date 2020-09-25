import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useRef,
  useMemo,
  useLayoutEffect,
} from 'react';

type UseToggle = (
  state: boolean,
) => [
  boolean, // state
  (nextValue?: boolean) => void, // toggle
];

const useToggle: UseToggle = state => {
  const [value, setValue] = useState<boolean>(state);

  const toggle = useCallback(
    (nextValue?: boolean) => {
      if (typeof nextValue !== 'undefined') {
        setValue(!!nextValue);
        return;
      }

      setValue(newValue => !newValue);
    },
    [setValue],
  );

  return [value, toggle];
};

const countContext = React.createContext(2);

function Bar() {
  const count = useContext(countContext);
  return <div>{count}</div>;
}

interface state {
  count: number;
}

const initState: state = {
  count: 0,
};

const reducer = (state: state, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
};

// function WithoutMemo() {
//     const [count, setCount] = useState(1);
//     const [val, setValue] = useState('');
//
//     // function expensive() {
//     //     console.log('compute');
//     //     let sum = 0;
//     //     for (let i = 0; i < count * 100; i++) {
//     //         sum += i;
//     //     }
//     //     return sum;
//     // }
//
//     const expensive = useMemo(() => {
//         console.log('compute');
//         let sum = 0;
//         for (let i = 0; i < count * 100; i++) {
//             sum += i;
//         }
//         return sum;
//     }, [count]);
//
//     return <div>
//         <h4>{count}-{val}-{expensive}</h4>
//         <div>
//             <Index onClick={() => setCount(count + 1)}>+c1</Index>
//             <input value={val} onChange={event => setValue(event.target.value)}/>
//         </div>
//     </div>;
// }

function UseCallback(props: any) {
  console.log('callback');

  return <button onClick={props.onClick}>Click</button>;
}

const Hooks = () => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initState);

  const [on, toggle] = useToggle(true);
  console.log(on);

  const [text, updateText] = useState('');
  const textRef: any = useRef();

  useLayoutEffect(() => {
    textRef.current = text; // 将 text 写入到 ref
  });

  const memoizedHandleClick = useCallback(() => {
    const currentText = textRef.current; // 从 ref 中读取 text
    console.log(currentText);
  }, [textRef]);

  useEffect(() => {
    toggle();
    return () => {
      console.log('unmount');
    };
  }, []);

  let nameRef: React.RefObject<any> = useRef();
  const submitButton = () => {
    console.log(nameRef.current.value);
  };

  const MeUseCallback = useMemo(
    () => <UseCallback onClick={memoizedHandleClick} />,
    [],
  );

  return (
    <div>
      <h1>useContext</h1>
      <countContext.Provider value={count}>
        <Bar />
      </countContext.Provider>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>useReducer</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        -
      </button>
      <h1>useCallback</h1>
      {MeUseCallback}
      <input value={text} onChange={e => updateText(e.target.value)} />
      <h1>useRef</h1>
      <input type="text" ref={nameRef} />
      <button type="button" onClick={submitButton}>
        Submit
      </button>
    </div>
  );
};

export default Hooks;
