import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Link, Route} from 'react-router-dom';
import './example/index.scss'
import Icon from './example/icon'
import Hooks from './example/hooks'
import Dialog from './example/Dialog'
import Layout2 from './example/layout'

import {Layout, Content, Header, Aside} from './lib/layout/layout';


ReactDom.render(
    <div className='x-example'>
        <HashRouter>
            <Layout>
                <Header className='header'>
                    <h1>React UI</h1>
                </Header>
                <Layout>
                    <Aside className='aside'>
                            <Link to='/icon'>icon 图标</Link>
                            <Link to='/dialog'>dialog 弹出框</Link>
                            <Link to='/layout'>Layout 组件</Link>
                    </Aside>
                    <Content className='content'>
                            <Route path="/icon" exact={true} component={Icon}/>
                            <Route path="/hooks" component={Hooks}/>
                            <Route path="/dialog" component={Dialog}/>
                            <Route path="/layout" component={Layout2}/>
                    </Content>
                </Layout>
            </Layout>
        </HashRouter>
    </div>, document.getElementById('root'))
