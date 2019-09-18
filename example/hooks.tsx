import React, {useState, useEffect, useContext, useReducer, useCallback, useRef} from 'react'

type UseToggle = (
    state: boolean
) => [
    boolean, // state
    (nextValue?: boolean) => void // toggle
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
        [setValue]
    );

    return [value, toggle];
}





const countContext = React.createContext(2);

function Bar() {
    const count = useContext(countContext);
    return <div>{count}</div>;
}

interface state {
    count: number
}

const initState: state = {
    count: 0
}


const reducer = (state: state, action: any) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + action.payload};
        case "decrement":
            return {count: state.count - action.payload};
        default:
            throw new Error();

    }
}

function UseCallback(props: any) {

    return <button onClick={props.onClick}>Click</button>
}


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
//             <button onClick={() => setCount(count + 1)}>+c1</button>
//             <input value={val} onChange={event => setValue(event.target.value)}/>
//         </div>
//     </div>;
// }


const Hooks = () => {
    const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(reducer, initState)

    const [on, toggle] = useToggle(true);

    const memoizedHandleClick = useCallback(() => {
    }, []);



    useEffect(() => {
        toggle()
        console.log('Click happened',on )
        return () => {
            console.log('unmount')
        }
    }, []);


    let nameRef: React.RefObject<any> = useRef();
    const submitButton = () => {
        console.log(nameRef.current.value);
    };


    return (
        <div>
            <h1>useContext</h1>
            <countContext.Provider value={count}>
                <Bar/>
            </countContext.Provider>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>useReducer</h1>
            Count: {state.count}
            <button onClick={() => dispatch({type: "increment", payload: 1})}>
                +
            </button>
            <button onClick={() => dispatch({type: "decrement", payload: 1})}>
                -
            </button>
            <h1>useCallback</h1>
            <UseCallback onClick={memoizedHandleClick}/>
            <h1>useRef</h1>
            <input type='text' ref={nameRef}/>
            <button type="button" onClick={submitButton}>Submit</button>
        </div>

    )
}


export default Hooks

