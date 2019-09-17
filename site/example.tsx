import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Route, NavLink} from 'react-router-dom';
import '../example/index.scss'
import Icons from '../example/icon/icon'
import Hooks from '../example/hooks'
import Dialog from '../example/modal/modal'
import Layout2 from '../example/layout'
import Form from '../example/form'
import Tab from '../example/tab'
import Button from '../example/button/button'
import {Icon} from '../lib/index';
import Carousel from '../example/carousel'
import Progress from '../example/progress'
import Tree from '../example/tree'
import Breadcrumb from '../example/breadcrumb'
import Popover from '../example/popover'

ReactDom.render(
    <div className='x-example'>
        <HashRouter>
            <header className='x-example__header'>
                <div className='left'>
                    <Icon name='logo'  style={{width:'32px',height:'32px'}}/>
                    <h3>React UI</h3>
                </div>
                <a href="https://github.com/Chrisxmy/React-ui" target="_blank">
                    <Icon name='github' className='right' style={{ height: '24px', width:'24px'}}/>
                </a>
            </header>
            <div className='main'>
                <aside className='aside'>
                    <ul className="nav">
                        <li><NavLink to='/icon' className='link' activeClassName="link-active">Icon 图标</NavLink></li>
                        <li><NavLink to='/button' className='link' activeClassName="link-active">Button</NavLink></li>
                        <li><NavLink to='/dialog' className='link' activeClassName="link-active">Modal 弹出框</NavLink></li>
                        <li><NavLink to='/layout' className='link' activeClassName="link-active">Layout 布局</NavLink></li>
                        <li><NavLink to='/tab' className='link' activeClassName="link-active">Tab 切换</NavLink></li>
                        <li><NavLink to='/carousel' className='link' activeClassName="link-active">Carousel</NavLink></li>
                        <li><NavLink to='/progress' className='link' activeClassName="link-active">Progress</NavLink></li>
                        <li><NavLink to='/tree' className='link' activeClassName="link-active">Tree</NavLink></li>
                        <li><NavLink to='/breadcrumb' className='link' activeClassName="link-active">Breadcrumb</NavLink></li>
                        <li><NavLink to='/popover' className='link' activeClassName="link-active">Popover</NavLink></li>
                    </ul>
                </aside>
                <main className='content'>
                    <Route path="/icon" exact={true} component={Icons}/>
                    <Route path="/button" component={Button}/>
                    <Route path="/hooks" component={Hooks}/>
                    <Route path="/dialog" component={Dialog}/>
                    <Route path="/layout" component={Layout2}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/tab" component={Tab}/>
                    <Route path="/carousel" component={Carousel}/>
                    <Route path="/progress" component={Progress}/>
                    <Route path="/tree" component={Tree}/>
                    <Route path="/breadcrumb" component={Breadcrumb}/>
                    <Route path="/popover" component={Popover}/>
                </main>
            </div>
        </HashRouter>
    </div>, document.getElementById('root'))
