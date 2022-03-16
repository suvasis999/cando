import React, { useEffect,useState } from 'react';
import { Card, Divider } from 'antd';
import TabBar from '../../../components/controls/custom-tab-bar';
import { useRouter } from "next/router";
import { List, Avatar } from 'antd';
import {getCustomerdetailsArr,getStaffingListwithCustDetails} 
from '../../../config/appServices';  
import { Tabs } from 'antd';
import { Sticky, StickyContainer } from 'react-sticky'; 

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

const Demo = () => { 
  const [candtls, setcandtls] = useState([]);
  const router = useRouter();
  const TabPane = Tabs.TabPane;


	useEffect(() => {
  		 const { id} = router.query;
  		 console.log('id is'+id);
  		 getCustomerDtls();
  		 
	}, [router]);

async function getCustomerDtls(){
   const { id} = router.query;
   const data = await getStaffingListwithCustDetails(id)
    .then(result=>{
     if(result.message=='SUCCESS'){
      	setcandtls(result.data.staffing_details);
      	console.log(result.data.staffing_details);
      }
  })}



    return (
      <Card bodyStyle={{ padding: 0 }} id="components-button-demo">
        
        <Divider orientation="left">
          <small>Staffing Details</small>
        </Divider>
        <div className="p-4"> 


        	<StickyContainer>
			    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
			      <TabPane tab="Staffing Details" key="1" style={{minHeight:500 }}>
			        
			       		<List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item>Name: {item.custName} </List.Item>}
					      className="mb-4"
					    />

					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item>Address: {item.custAddress} </List.Item>}
					      className="mb-4"
					    />

					     <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item>Details: {item.custdtls} </List.Item>}
					      className="mb-4"
					    />
					    
					   
				    
			      </TabPane>
			     
			    </Tabs>
			  </StickyContainer>

          
        </div>

       
      </Card> 
    );
 
}

export default Demo; 
