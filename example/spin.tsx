import React from 'react'
import Spin from '../lib/spin/spin';

export default  function(){
    const snippet = '加载中'



    return (
        <div>
            <Spin tip='loading' size={24} />

            <Spin indicator={snippet} delay={2000}/>
        </div>
    )
}