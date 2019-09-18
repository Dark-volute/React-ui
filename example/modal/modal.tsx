import React ,{useState,Fragment}from 'react'
import { Modal } from '../../lib/index';
import { alert,confirm ,modal} from '../../lib/modal/modal'
import Button from '../../lib/button/button';
import  Demo from '../demo'
const example1 = require('!!raw-loader!./modal.example1.md')
const example2 = require('!!raw-loader!./modal.example2.md')
const example3 = require('!!raw-loader!./modal.example2.md')

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
        <Demo code={example1}>
            <Button type='primary' onClick={() => setX(!x)}>点击</Button>
            <Modal visible={x}
                   onClose={() => setX(false)}
                   maskClosable={true}
                   buttons={
                <Fragment>
                    <button onClick={() => {setX(false);console.log('cancel')}}>Cancel</button>
                    <button onClick={() => {setX(false);console.log('ok')}}>Ok</button>
                </Fragment>
            }/>
        </Demo>
         <Demo code={example2}>
                <Button onClick={() => {alert('haha',() => {console.log('yes')})}}>alert</Button>
                <Button onClick={ ()=>confirm('haha',
                    ()=>{console.log('yes')},
                    ()=> {console.log('no')} ) }>confirm</Button>
            </Demo>
            <Demo code={example3} title='自定义'>
                <Button onClick={ s }>自定义button</Button>
            </Demo>
        </Fragment>
    )
}