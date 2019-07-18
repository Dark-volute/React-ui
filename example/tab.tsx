import React from 'react'
import {Tab, TabPane}  from '../lib/tab/tab';


export default  function(){
    return (
        <div>
           <Tab defaultActiveKey={1}>
          <TabPane tab="Tab111111111" index={1}>
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab2222222222222" index={2}>
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab333" index={3}>
            Content of tab 3
          </TabPane>
        </Tab>
        </div>
    )
}
