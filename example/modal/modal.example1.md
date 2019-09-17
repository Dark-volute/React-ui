import React from 'react'
import {Modal} from 'xReact';

export default function () {
    const [x, setX] = useState(false)
    return (
            <div className='x-icon-example'>
                <Button type='primary' onClick={() => setX(!x)}>点击</Button>
                <Modal visible={x}  maskClosable={true} onClose={() => setX(false)} buttons={
                 <Fragment>
                   <button onClick={() => {setX(false);console.log('cancel')}}>Cancel</button>
                   <button onClick={() => {setX(false);console.log('ok')}}>Ok</button>
                 </Fragment>
             }/>
            </div>
    )
}