import React, { useEffect } from 'react';

import { Button, Checkbox, Form, Input, Message, Row,Col,Select,Steps ,DatePicker} from 'antd';
import { Eye, Mail, Triangle } from 'react-feather'; 

import Link from 'next/link'; 
import Router from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import Textarea from '../../components/controls/textarea'; 
import Basic from '../../components/controls/basic';
import multiple from '../../components/controls/multiple';
import {getshiftmapdetails,editShiftMapDetails,getCityArr} 
from '../../config/appServices';
import { useRouter } from "next/router";

const { Step } = Steps;
const { Item } = Form;

const FormItem = Form.Item; 
 
const Content = styled.div`
  width: 100%;
  z-index: 2;
  min-width: 300px;
`;



const Customer = ({ form }) => { 
const [data, setData] = React.useState([]); 
const [uid, setUid] = React.useState([]);
const [address, setAddress] = React.useState('');
const [dtls, setDtls] = React.useState('');
const [current, setCurrent] = React.useState(0);
 const [city,setCity]=React.useState([]);

 const[shiftTime,setshiftTime]=React.useState([]);
const dispatch=useDispatch();
const router = useRouter() 

useEffect(() => {
  getCiity();
  getshiftmap();
 }, []);


async function getCiity(){
    const data = await getCityArr()
    .then(result=>{
      if(result.message=='SUCCESS'){
       setCity(result.data.city_detailss)
        }

      })
  }

async function getshiftmap(){
   const { id} = router.query;
  const data = await getshiftmapdetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        console.log(result.data);
        form.setFieldsValue({city: result.data.cityshiftmap.id});
        form.setFieldsValue({shifttimwe: result.data.cityshiftmap.shiftTime});
       
        }
      })
  }
async function editCustomer(values){
  const { id} = router.query;
 const cSignup = await editShiftMapDetails({
        city:values.city,
        shifttimwe:values.shifttimwe,csmid:id
      })
   .then(result=>{
    if(result.message=='SUCCESS'){
      console.log(result);
       Message.success(
                'Shifting Location Mapping Details update sucessfully...!'
              ).then(() => 
              
             
            getshiftmap()
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
}




function onChange(date, dateString) {
  console.log(date, dateString);
}

return(
  <div>
  <Row
    align="left"
    className="px-3 bg-white mh-page" 
    style={{ minHeight: '100vh' }} 
  >
    <Content>
      <div className="text-center mb-5">
        <Link href="">
          <a className="brand mr-0">
            <Triangle size={32} strokeWidth={1} />
          </a>
        </Link>
        <h5 className="mb-0 mt-3">Customer Registration</h5>

        <p className="text-muted">get started with our service</p>
      </div>

     

<Form
        onSubmit={e => {
          
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
              editCustomer(values);
               
            }
          });
        }}
      >
           <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
          
          <FormItem label='City'>
            {form.getFieldDecorator('city', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Select
              showSearch
              optionFilterProp="children"
             
              filterOption={(input, option) =>  
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 
                || option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
          {city.map((item) => (
             <Option value={item.cityId}>{item.cityname}</Option>
          ))}
           
            
          </Select>)}
          </FormItem>
        </Col>

        <Col span={8} style={{ display: 'block'}}>
          
          <FormItem label='Shift Time'>
            {form.getFieldDecorator('shifttimwe', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })( <Select
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['12:00 AM']}
             onChange={(value) => {
               setshiftTime(value)
            }} 
          >
            <Option value='12:00AM'>12:00 AM</Option>
            <Option value='2:00 AM'>2:00 AM</Option>
            <Option value='4:00 AM'>4:00 AM</Option>
            <Option value='6:00 AM'>6:00 AM</Option>
            <Option value='8:00 AM'>8:00 AM</Option>
            <Option value='10:00 AM'>10:00 AM</Option>
            <Option value='12:00 PM'>12:00 PM</Option>
            <Option value='2:00 PM'>2:00 PM</Option>
            <Option value='4:00 PM'>4:00 PM</Option>
            <Option value='6:00 PM'>6:00 PM</Option>
            <Option value='8:00 PM'>8:00 PM</Option>
            <Option value='10:00 PM'>10:00 PM</Option>
          </Select>)}
          </FormItem>
        </Col>

       </Row>
       <Row>
       <Col span={8} style={{ display: 'block'}}>
          <FormItem>
          
          <Button type="primary" htmlType="submit" block className="mt-3">
           Update
          </Button>
        </FormItem>
         </Col>
       </Row>
       
        </Form>
    </Content>
  </Row>
  </div>
  );
};

export default Form.create()(Customer);
