import React, {Fragment, ReactNode, ReactFragment, ReactElement} from 'react'
import ReactDom from 'react-dom'
import './modal.scss'
import {createScopedClasses} from "../utils/classNames";
import ClickOutside from '../clickOutside/clickOutside';

const sc = createScopedClasses('modal')

interface Props {
    maskClosable?: boolean
    visible: boolean,
    onClose: React.MouseEventHandler,
    onOk?: React.MouseEventHandler,
    onCancel?: React.MouseEventHandler,
    buttons?: ReactFragment | ReactNode
}

const Modal: React.FunctionComponent<Props> = (props) => {
    const refContent: any = React.useRef();

    const modal = <div className='x-modal' ref={refContent}>
        <header className={sc('header')}>
            <span className={sc('header__title')}>提示</span>
        </header>
        <main className={sc('main')}>
            {props.children}
        </main>
        {props.buttons ?
            <footer className={sc('footer')}>
                {props.buttons}
            </footer>
            : null}
    </div>

    const snippet = props.visible ?
        <div className={sc('wrap')}>
            <div className={sc('mask')}></div>
            {
                props.maskClosable ?
                    <ClickOutside handler={props.onClose}>
                        {modal}
                    </ClickOutside> :
                    modal
            }
        </div> :
        null

    return (
        snippet ? snippet : ReactDom.createPortal(snippet, document.body)
    )
}

Modal.defaultProps = {
    maskClosable:false
}

const createModal = (content: ReactNode, buttons?: ReactFragment | ReactElement) => {
    const render = (props: Props, children: ReactNode) => {
        ReactDom.render(React.createElement(Modal, props, children), div);
    };

    const onClose = () => {
        render({...props, visible: false}, content);
        ReactDom.unmountComponentAtNode(div)
        div.remove()
        return true
    }


    const props = {
        visible: true,
        onClose,
        buttons,
    }

    const div = document.createElement('div')
    document.body.appendChild(div)
    render(props, content)

    return onClose
}

export const Alert = (content: ReactNode, callback: () => void) => {
    const close = createModal(content,
        <button onClick={() => {
            close() && callback && callback()
        }}>Ok</button>)
}

export const Confirm = (content: ReactNode, yes: () => void, no: () => void) => {
    const close = createModal(content,
        <Fragment>
            <button onClick={() => {
                close() && no && no()
            }}>Cancel
            </button>
            <button onClick={() => {
                close() && yes && yes()
            }}>Ok
            </button>
        </Fragment>)
}

export const modal = (content: ReactNode) => {
    return createModal(content)
}


export default Modal