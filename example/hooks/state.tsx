import React, { useState } from 'react'



const Hooks = () => {
    const [user, setUser] = useState<any>( () => ( { name: 'xmy',age: 18 } ));

    return (
        <div>
            {user.name}
            {user.age}
            <button onClick={() => setUser({ ...user, age: 12})}>+</button> 
            {/* 不合并状态 */}
        </div>

    )
}


export default Hooks

