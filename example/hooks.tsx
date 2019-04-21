import React,{useState,useEffect,useContext} from 'react'

const colorContext = React.createContext("gray");

function Bar() {
    const color = useContext(colorContext);
    return <div>{color}</div>;
}


const Hooks = () =>{
    const [count,setCount] = useState(0);

    useEffect(() => {
        return ()=>{
            console.log('unmount')
        }
    },[]);


    return (
        <div>
            <colorContext.Provider value={"red"}>
                <Bar />
            </colorContext.Provider>

            <span>{count}</span>
            <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    )
}


export  default  Hooks

