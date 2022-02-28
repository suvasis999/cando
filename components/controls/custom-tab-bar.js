import React, { useEffect,useState } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        style={{ ...style, zIndex: 1, background: '#fff' }}
      />
    )}
  </Sticky>
);

const Component = (props) => (

  <StickyContainer>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      <TabPane tab="Candidate Details" key="1" style={{ height: 200 }}>
        Candidate Details
      </TabPane>
      <TabPane tab="Employer Details" key="2">
        Employer Details
      </TabPane>
      <TabPane tab="Availability" key="3">
        Availability
      </TabPane>
      <TabPane tab="Work Reference" key="4">
        Work Reference
      </TabPane>
      <TabPane tab="Emergency Contact" key="5">
        Emergency Contact
      </TabPane>
       <TabPane tab="Acount Details" key="6">
        Acount Details
      </TabPane>
    </Tabs>
  </StickyContainer>
);
export default Component;
