import React, { useEffect } from 'react';
import { useRouter } from "next/router"
import { Card, Divider } from 'antd';
import { Button, Checkbox, Form, Input, Message, Row,Col,Select,Icon } from 'antd';
import styled from 'styled-components';

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
import { theme } from '../../../components/styles/GlobalStyles';
import {candonlineExamHealth} from '../../config/appServices';


const FormItem = Form.Item;
const Content = styled.div`
  width: 100%;
  z-index: 2;
  min-width: 300px;
`;

 const AnswerPage= ({ form }) => {  
const router = useRouter()
const [Quesstate, setQuesState] = React.useState([]);
const [state, setState] = React.useState(0);
const [name, setName] = React.useState('');
  useEffect(() => {
  	getQuestionData();
  setState(1) // When the dynamic route change reset the state
}, [router])

 const getQuestionData = async () => {
const { id,Sub } = router.query
 const data = await candonlineExamHealth(id,Sub) 
    .then(result=>{
    	console.log(result);
     if(result.message=='SUCCESS'){
        setQuesState(result.data.cand_question);
        setName(result.name);
     }
     else{
     
     }

    });
 }

  const {
    query: { Sub, id },
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
          <small>{Sub} -Online Exam</small>
        </Divider>
        <div>
      Name: {name} 
      <Row gutter={16}>
      <Form
        onSubmit={e => {
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
             
            }
          });
        }}
      >
      {Quesstate.map((item,index) =>
          
         
        <Col xs={24} key={index}>
           <FormItem label={item.quesTitle+'?'} >
          {form.getFieldDecorator('qs', {
            rules: [
              {
                required: true,
                message: 'Enter Answer'
              }
            ]
          })(
             <Input placeholder="Enter Answer" /> 
          )}
        </FormItem>
        </Col>
        )}

        <FormItem>
          
          <Button type="primary" htmlType="submit" block className="mt-3">
           Submit
          </Button>
        </FormItem>

        
        </Form>
       
      </Row>
    </div>
     </Card>
       </Content>
      </Row></div>
  )
}

export default Form.create()(AnswerPage);

