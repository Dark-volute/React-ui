---
nav:
  title: Components
  path: /components
group:
  title: 数据
  path: /data
---

### Spin 加载中

Demo:

```tsx
import React from 'react';
import { Spin } from 'sun-xui';
export default function() {
  const snippet = '加载中';
  return (
    <div>
      <Spin tip="loading" size={24} />

      <Spin indicator={snippet} delay={2000} />
    </div>
  );
}
```
