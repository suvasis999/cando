import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import Router from 'next/router';
import { Card, Divider } from 'antd';
import { Button, Checkbox, Form, Input, Message, Row,Col,Select,Icon } from 'antd';
import styled from 'styled-components';
import StatCard from '../../components/shared/StatCard';
import {
  Archive,
  Bell,
  Bookmark,
  Edit,
  GitCommit,
  MessageCircle,
  MoreHorizontal,
  PhoneCall,
  Printer,
  Save,
  Server,
  Trash,
  TrendingDown,
  TrendingUp,ExternalLink,Eye
} from 'react-feather';
import { theme } from '../../components/styles/GlobalStyles';
import {candquesDetails} from '../config/appServices';
import Link from 'next/link';
const Content = styled.div`
  width: 100%;
  z-index: 2;
  min-width: 300px;
`;

export default function DynamicPage() {
const router = useRouter()
const [state, setState] = React.useState(0);
const [Enstate, setenState] = React.useState('');
const [Hlstate, sethlState] = React.useState('');
const [INstate, setInState] = React.useState('');
const [Nostate, setNoState] = React.useState('');
const [Namestate, setNameState] = React.useState('');
  useEffect(() => {
  	getQuestionData();
  setState(1) // When the dynamic route change reset the state
}, [router])

 const getQuestionData = async () => {
 	console.log(id);
     const data = await candquesDetails(id)
    .then(result=>{
    	console.log(result);
     if(result.message=='SUCCESS'){
     setenState(result.english);
     sethlState(result.health);
     setInState(result.induction);
     setNoState(result.numeric);
     setNameState(result.name);
     }
     else{
     
     }

    });
 }

  const {
    query: { dynamic, id },
  } = router
  return (
    <div>
  <Row
    align="left"
    className="px-3 bg-white mh-page" 
    style={{ minHeight: '100vh'}} 
  >
   <Content>
  <Card bodyStyle={{ padding: 0 }} id="components-button-demo">
       <Divider orientation="left">
          <small>Candidate Questionnaire Details</small>
        </Divider>
        <div>
      Name: {Namestate} 
      <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Health Questionnaire"
            value={Hlstate==0?'Give Exam': 'View Answer'}
           icon={Hlstate==0?<ExternalLink size={20} strokeWidth={1} />:
        	<Eye size={20} strokeWidth={1} />}
            color={theme.primaryColor}
            clickHandler={() =>  Router.push("/exam/Health/"+id)} 
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="English Questionnaire"
            value={Enstate==0?'Give Exam': 'View Answer'}
            icon={Enstate==0?<ExternalLink size={20} strokeWidth={1} />:
        	<Eye size={20} strokeWidth={1} />}
            color={theme.darkColor}
           clickHandler={() =>  Router.push("/exam/English/"+id)} 
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Induction Questionnaire"
           value={INstate==0?'Give Exam': 'View Answer'}
            icon={INstate==0?<ExternalLink size={20} strokeWidth={1} />:
        	<Eye size={20} strokeWidth={1} />}
            color={theme.warningColor}
              clickHandler={() =>  Router.push("/exam/Induc/"+id)} 
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Numeric Questionnaire"
            value={Nostate==0?'Give Exam': 'View Answer'}
            icon={Nostate==0?<ExternalLink size={20} strokeWidth={1} />:
        	<Eye size={20} strokeWidth={1} />}
            color={theme.errorColor}
             clickHandler={() =>  Router.push("/exam/Numeric/"+id)} 
          />
        </Col>
      </Row>
    </div>
     </Card>
       </Content>
      </Row></div>
  )
}

