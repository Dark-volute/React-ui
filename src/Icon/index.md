---
nav:
  title: Components
  path: /components
group:
  title: Basic
  path: /basic
---

## Icon 图标

Demo:

```tsx
import React from 'react';
import { Icon } from 'volute-ui';

export default () => {
  return (
    <>
      <Icon name="wechat" style={{ fill: 'green' }} />
      <Icon name="arrow-left" />
      <Icon name="arrow-right" />
      <Icon name="logo" style={{ width: '30px', height: '30px' }} />
      <Icon name="github" />
    </>
  );
};
```
