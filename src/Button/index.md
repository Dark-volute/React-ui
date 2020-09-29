---
nav:
  title: Components
  path: /components
group:
  title: Basic
  path: /basic
---

## Button 按钮

Demo:

```tsx
import React from 'react';
import { Button } from 'dumi';

export default () => {
  return (
    <>
      <Button type="primary">primary</Button>
      <Button>default</Button>
      <Button type="dashed">dashed</Button>
      <Button type="danger">danger</Button>
      <Button type="link">link</Button>
    </>
  );
};
```
