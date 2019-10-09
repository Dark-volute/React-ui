import React from 'react'
import {Button} from 'xreact-ui';

export default function () {
    return (
        <div>
            <Button type='primary'>primary</Button>
            <Button>default</Button>
            <Button type='dashed'>dashed</Button>
            <Button type='danger'>danger</Button>
            <Button type='link'>link</Button>
        </div>
    )
}