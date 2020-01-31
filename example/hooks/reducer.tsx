import React, {useState, useContext, useReducer} from 'react'



const countContext:any = React.createContext(null);

function Bar() {
    const { count , setCount} = useContext(countContext);
    return <div onClick={() => setCount(count + 1)}>{count}</div>;
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



const Hooks = () => {
    const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <h1>useContext</h1>
            <countContext.Provider value={{count ,setCount}}>
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

        </div>

    )
}


export default Hooks

