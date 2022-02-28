import React, { useEffect,useState } from 'react';
import { Card, Divider } from 'antd';
import TabBar from '../../../components/controls/custom-tab-bar';
import { useRouter } from "next/router";
import { List, Avatar } from 'antd';
import {getCandidatedetailsArr,getCandidateemployerdetails,
getCandidateavaildetails,getCandidateworddetails,getCandidateemcontact,
getCandidateacdtls} 
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
  const [canempdtls, setcanempdtls] = useState([]);
  const [canempavaildtls, setcanempavaildtls] = useState([]);
  const [canworkdtls, setcanworkdtls] = useState([]);
  const [canemcondtls, setcanemcondtls] = useState([]);
  const [canacdtls, setcanacdtls] = useState([]);
  const router = useRouter();
  const TabPane = Tabs.TabPane;


	useEffect(() => {
  		 const { id} = router.query;
  		 console.log('id is'+id);
  		 getCandidateDtls();
  		 getCandidateEmployee();
  		 getCandidateavailable();
  		 getCandidateword();
  		 getCandidateemcon();
  		 getCandidateac();
	}, [router]);

async function getCandidateDtls(){
   const { id} = router.query;
   const data = await getCandidatedetailsArr(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
      	setcandtls(result.data.candidate_details);
      	console.log(result.data.candidate_details);
      }
  })}

async function getCandidateEmployee(){
	const {id} = router.query;
   const data = await getCandidateemployerdetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        setcanempdtls(result.data.cand_employe_dtls);
      	console.log(result.data.cand_employe_dtls);
      }
  })}

async function getCandidateavailable(){
    const {id} = router.query;
   const data = await getCandidateavaildetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
      	setcanempavaildtls(result.data.cand_avilability);
      	console.log(result.data.cand_avilability);
      }
  })
}

async function getCandidateword(){
    const {id} = router.query;
   const data = await getCandidateworddetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
      		setcanworkdtls(result.data.cand_work_reference);
      		console.log(result.data.cand_work_reference);
      	}
      })}

async function getCandidateemcon(){
    const {id} = router.query;
   const data = await getCandidateemcontact(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
         setcanemcondtls(result.data.cand_imregency_cont);
         console.log(result.data.cand_imregency_cont);
       }
    })
}

async function getCandidateac(){
    const {id} = router.query;
   const data = await getCandidateacdtls(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        	setcanacdtls(result.data.cand_acount_dtls);
        	console.log(result.data.cand_acount_dtls);
        }
    })
}


    return (
      <Card bodyStyle={{ padding: 0 }} id="components-button-demo">
        
        <Divider orientation="left">
          <small>Candidate Details</small>
        </Divider>
        <div className="p-4">


        	<StickyContainer>
			    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
			      <TabPane tab="Candidate Details" key="1" style={{minHeight:500 }}>
			        
			       		<List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item>Name: {item.canTitle} {item.canFirstname} {item.canSurname}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item>Current Address: {item.canCuraddress}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Telephone: {item.Cantel}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Email: {item.Canemail}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Ni. Number: {item.CanNino}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Nationality : {item.Cannationality}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Driving License  : {item.CanDl}</List.Item>}
					      className="mb-4"
					    />
					     <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Own Transport   : {item.canTransport}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> How did you hear about our company   : {item.Howdidyouhear}</List.Item>}
					      className="mb-4"
					    />
					     <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Job looking for   : {item.JoblookingFor}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Level of English Language    : {item.levelOfEnglish}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Other Language    : {item.Otherlang}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={candtls}
					      renderItem={item => <List.Item> Qualification    : {item.Qualifation}</List.Item>}
					      className="mb-4"
					    />
				    
			      </TabPane>
			      <TabPane tab="Employer Details" key="2">
			        <List
					     bordered
					      dataSource={canempdtls}
					      renderItem={item => <List.Item>Employer Name: {item.emplouyerName} </List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canempdtls}
					      renderItem={item => <List.Item>Start Date: {item.startDate}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canempdtls}
					      renderItem={item => <List.Item> End Date: {item.endDate}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canempdtls}
					      renderItem={item => <List.Item> Skill Gains: {item.skillGain}</List.Item>}
					      className="mb-4"
					    />
					    
			      </TabPane>
			      <TabPane tab="Availability" key="3">
			        <List
					     bordered
					      dataSource={canempavaildtls}
					      renderItem={item => <List.Item>Days you Work: {item.daysyouwork} </List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canempavaildtls}
					      renderItem={item => <List.Item>Shifts you work: {item.shift}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canempavaildtls}
					      renderItem={item => <List.Item> Can work in Cold?: {item.isCold}</List.Item>}
					      className="mb-4"
					    />
					   
					    
			      </TabPane>
			      <TabPane tab="Work Reference" key="4">
			        <List
					     bordered
					      dataSource={canworkdtls}
					      renderItem={item => <List.Item>Company Name: {item.compName} </List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canworkdtls}
					      renderItem={item => <List.Item>Contact Name: {item.contName}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canworkdtls}
					      renderItem={item => <List.Item> Email: {item.Email}</List.Item>}
					      className="mb-4"
					    />
					   
			      </TabPane>
			      <TabPane tab="Emergency Contact" key="5">
			         <List
					     bordered
					      dataSource={canemcondtls}
					      renderItem={item => <List.Item>Contact Name: {item.name} </List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canemcondtls}
					      renderItem={item => <List.Item>Telephone No: {item.tel}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canemcondtls}
					      renderItem={item => <List.Item> Relation: {item.Relation}</List.Item>}
					      className="mb-4"
					    />
			      </TabPane>
			       <TabPane tab="Acount Details" key="6">
			        <List
					     bordered
					      dataSource={canacdtls}
					      renderItem={item => <List.Item>Bank Name: {item.bankName} </List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canacdtls}
					      renderItem={item => <List.Item>Ac. Holder Name: {item.acHoldername}</List.Item>}
					      className="mb-4"
					    />
					    <List
					     bordered
					      dataSource={canacdtls}
					      renderItem={item => <List.Item> Acount Name: {item.acNo}</List.Item>}
					      className="mb-4"
					    />
					     <List
					     bordered
					      dataSource={canacdtls}
					      renderItem={item => <List.Item> Short Code: {item.shortCode}</List.Item>}
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
