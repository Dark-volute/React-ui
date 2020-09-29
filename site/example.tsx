import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Route, NavLink} from 'react-router-dom';
import '../example/index.scss'
import Icons from '../example/icon/icon'
import Hooks from '../example/hooks/ref'
import Dialog from '../example/modal/modal'
import Layout from '../example/layout'
import Form from '../example/form'
import Tab from '../example/tab/tab'
import Button from '../example/button/button'
import {Icon} from '../lib/index';
import Breadcrumb from '../example/breadcrumb'
import Popover from '../example/popover'
import Spin from '../example/spin'
import Scroll from '../example/scroll'
import Usage from '../example/usage/index'
import Tree from '../example/tree'

const configs = [
    {ch: '快速上手', path: 'usage'},
    {ch: '按钮', en: 'Button', path: 'button'},
    {ch: '弹出框', en: 'Modal', path: 'dialog'},
    {ch: '布局', en: 'Layout', path: 'layout'},
    {ch: '切换', en: 'Tab', path: 'tab'},
    {ch: '面包屑', en: 'Breadcrumb', path: 'breadcrumb'},
    {ch: '气泡', en: 'Popover', path: 'popover'},
    {ch: '加载', en: 'Loading', path: 'spin'},
    {ch: '无限滚动', en: 'InfiniteScroll', path: 'infiniteScroll'},
    {ch: '树形控件', en: 'Tree', path: 'tree'},
]

ReactDom.render(
    <div className='x-example'>
        <HashRouter>
            <header className='x-example__header'>
                <div className='left'>
                    <Icon name='logo' style={{width: '32px', height: '32px'}}/>
                    <h3>XReact</h3>
                </div>
                <a href="https://github.com/Chrisxmy/React-ui" target="_blank">
                    <Icon name='github' className='right' style={{height: '24px', width: '24px'}}/>
                </a>
            </header>
            <div className='main'>
                <aside className='aside'>
                    <ul className="nav">
                        {configs.map(item => {
                            return (
                                <li key={item.path}>
                                    <NavLink to={'/' + item.path}
                                             className='link'
                                             activeClassName="link-active">
                                        <span className='en'>{item.en}</span>
                                        <span className='ch'>{item.ch}</span>
                                    </NavLink></li>
                            )
                        })}
                    </ul>
                </aside>
                <main className='content'>
                    <Route path="/usage" exact component={Usage}/>
                    <Route path="/icon" component={Icons}/>
                    <Route path="/button" component={Button}/>
                    <Route path="/hooks" component={Hooks}/>
                    <Route path="/dialog" component={Dialog}/>
                    <Route path="/layout" component={Layout}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/tab" component={Tab}/>
                    <Route path="/breadcrumb" component={Breadcrumb}/>
                    <Route path="/popover" component={Popover}/>
                    <Route path="/spin" component={Spin}/>
                    <Route path="/infiniteScroll" component={Scroll}/>
                    <Route path="/tree" component={Tree}/>
                </main>
            </div>
        </HashRouter>
    </div>, document.getElementById('root'))
