import React from 'react'
import {Layout,Content, Header, Footer,Aside}  from '../lib/layout/layout';


export default  function(){
    return (
        <div>
            <h1>1</h1>
            <Layout>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
            <h1>2</h1>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Aside>Sider</Aside>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <h1>3</h1>
            <Layout>
                <Aside>aside</Aside>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
