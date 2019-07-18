import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Route, NavLink} from 'react-router-dom';
import '../example/index.scss'
import Icons from '../example/icon'
import Hooks from '../example/hooks'
import Dialog from '../example/Dialog'
import Layout2 from '../example/layout'
import Form from '../example/form'
import Tab from '../example/tab'
import {Icon} from '../lib/index';


ReactDom.render(
    <div className='x-example'>
        <HashRouter>
            <header className='header'>
                <Icon name='logo'  style={{width:'32px',height:'32px'}}/>
                <h3>React UI</h3>
            </header>
            <div className='main'>
                <aside className='aside'>
                    <ul className="nav">
                        <li><NavLink to='/icon' className='link' activeClassName="link-active">icon 图标</NavLink></li>
                        <li><NavLink to='/dialog' className='link' activeClassName="link-active">dialog 弹出框</NavLink></li>
                        <li><NavLink to='/layout' className='link' activeClassName="link-active">Layout 组件</NavLink></li>
                        <li><NavLink to='/tab' className='link' activeClassName="link-active">Tab</NavLink></li>
                    </ul>
                </aside>
                <main className='content'>
                    <Route path="/icon" exact={true} component={Icons}/>
                    <Route path="/hooks" component={Hooks}/>
                    <Route path="/dialog" component={Dialog}/>
                    <Route path="/layout" component={Layout2}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/tab" component={Tab}/>
                </main>
            </div>
        </HashRouter>
    </div>, document.getElementById('root'))
