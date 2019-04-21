import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Link, Route} from 'react-router-dom';
import './example/index.scss'
import Icon from './example/icon'
import Hooks from './example/hooks'
import Dialog from './example/Dialog'


ReactDom.render(
    <div className='x-example'>
        <HashRouter>
            <aside>
            <Link to='/icon'>icon 图标</Link>
            <Link to='/dialog'>dialog 弹出框</Link>
            </aside>
            <main>
            <Route path="/icon" exact={true} component={Icon}/>
            <Route path="/hooks" exact={true} component={Hooks}/>
            <Route path="/dialog" exact={true} component={Dialog}/>
            </main>
        </HashRouter>
    </div>, document.getElementById('root'))
