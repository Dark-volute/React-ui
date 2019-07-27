import React ,{useState,Fragment}from 'react'
import { Modal } from '../lib/index';
import { alert,confirm ,modal} from '../lib/modal/modal'
import Button from '../lib/button/button';

export default  function(){
    const [x, setX] = useState(false)

    const s = () => {
        const closer = modal(<div>
            hi
            <Button onClick={e => closer()}>close</Button>
        </div>);
    };
    return (
        <Fragment>
        <div>
            <Button type='primary' onClick={() => setX(!x)}>点击</Button>
            <Modal visible={x} onClose={() => setX(false)} buttons={
                <Fragment>
                    <button onClick={() => {setX(false);console.log('cancel')}}>Cancel</button>
                    <button onClick={() => {setX(false);console.log('ok')}}>Ok</button>
                </Fragment>
            }/>
        </div>
            <div>
                <Button onClick={() => {alert('haha',() => {console.log('yes')})}}>alert</Button>
            </div>
            <div>
                <Button onClick={ ()=>confirm('haha',
                    ()=>{console.log('yes')},
                    ()=> {console.log('no')} ) }>confirm</Button>
            </div>
            <div>
                <Button onClick={ s }>自定义button</Button>
            </div>
        </Fragment>
    )
}