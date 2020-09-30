---
nav:
  title: Components
  path: /components
group:
  title: 数据
  path: /data
---

### Layout

Demo:

```tsx
import React from 'react';
import { Layout, Content, Header, Footer, Aside } from 'sun-xui';
import './demo.less';
export default function() {
  return (
    <div className="x-layout-demo">
      <h1>1</h1>
      <Layout>
        <Header className="x-layout-demo-header">header</Header>
        <Content className="x-layout-demo-content">content</Content>
        <Footer className="x-layout-demo-footer">footer</Footer>
      </Layout>
      <h1>2</h1>
      <Layout>
        <Header className="x-layout-demo-header">Header</Header>
        <Layout>
          <Aside className="x-layout-demo-aside">aside</Aside>
          <Content className="x-layout-demo-content">Content</Content>
        </Layout>
        <Footer className="x-layout-demo-footer">Footer</Footer>
      </Layout>
      <h1>3</h1>
      <Layout>
        <Aside className="x-layout-demo-aside">aside</Aside>
        <Layout>
          <Header className="x-layout-demo-header">Header</Header>
          <Content className="x-layout-demo-content">Content</Content>
          <Footer className="x-layout-demo-footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
```
