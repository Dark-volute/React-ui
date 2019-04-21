import React ,{useState,Fragment}from 'react'
import { Dialog } from '../lib/index';
import { alert,confirm ,modal} from '../lib/dialog/Dialog'


export default  function(){
    const [x, setX] = useState(false)

    const s = () => {
        const closer = modal(<div>
            hi
            <button onClick={e => closer()}>close</button>
        </div>);
    };
    return (
        <Fragment>
        <div>
            <button onClick={() => setX(!x)}>点击</button>
            <Dialog visible={x} onClose={() => setX(false)}/>
        </div>
            <div>
                <button onClick={() => {alert('haha',() => {console.log('yes')})}}>alert</button>
            </div>
            <div>
                <button onClick={ ()=>confirm('haha',
                    ()=>{console.log('yes')},
                    ()=> {console.log('no')} ) }>confirm</button>
            </div>
            <div>
                <button onClick={ s }>自定义button</button>
            </div>
        </Fragment>
    )
}