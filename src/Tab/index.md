---
nav:
  title: Components
  path: /components
group:
  title: 数据
  path: /data
---

### Tabs 标签页

Demo:

```tsx
import React from 'react';
import { Tab, TabPane } from 'volute-ui';
export default function() {
  const onChange = (e, index) => {
    console.log(e.target, index);
  };

  return (
    <div>
      <Tab defaultActiveKey={2} onChange={onChange}>
        <TabPane tab="Tab111111111" index={1}>
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab2222222222222" index={2} disabled>
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab3" index={3}>
          Content of tab 3
        </TabPane>
      </Tab>
    </div>
  );
}
```
