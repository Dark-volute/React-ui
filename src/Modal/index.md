---
nav:
  title: Components
  path: /components
group:
  title: 数据
  path: /data
---

### Modal

Demo:

```tsx
import React, { useState, Fragment } from 'react';
import { modal, Modal, Alert, Confirm, Button } from 'sun-xui';

export default function() {
  const [x, setX] = useState(false);

  const s = () => {
    const closer = modal(
      <div>
        hi
        <Button onClick={e => closer()}>close</Button>
      </div>,
    );
  };
  return (
    <Fragment>
      <Button type="primary" onClick={() => setX(!x)}>
        点击
      </Button>
      <Modal
        visible={x}
        onClose={() => setX(false)}
        maskClosable={true}
        buttons={
          <Fragment>
            <button
              onClick={() => {
                setX(false);
                console.log('cancel');
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setX(false);
                console.log('ok');
              }}
            >
              Ok
            </button>
          </Fragment>
        }
      />

      <Button
        onClick={() => {
          Alert('haha', () => {
            console.log('yes');
          });
        }}
      >
        alert
      </Button>
      <Button
        onClick={() =>
          Confirm(
            'haha',
            () => {
              console.log('yes');
            },
            () => {
              console.log('no');
            },
          )
        }
      >
        confirm
      </Button>
      <Button onClick={s}>自定义button</Button>
    </Fragment>
  );
}
```
