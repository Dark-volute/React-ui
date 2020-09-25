---
nav:
  title: Components
  path: /components
group:
  title: Basic
  path: /basic
---

## Icon

Demo:

```tsx
import React from 'react';
import { Icon } from 'dumi';

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
