import React, { useEffect } from 'react';

import { Button, Checkbox, Form, Input, Message, Row,Col,Select,Steps ,DatePicker} from 'antd';
import { Eye, Mail, Triangle } from 'react-feather'; 

import Link from 'next/link'; 
import Router from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import Textarea from './controls/textarea'; 
import Basic from './controls/basic';
import multiple from './controls/multiple';
import {addCustomerDetails} 
from '../pages/config/appServices';
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
const dispatch=useDispatch();
 

useEffect(() => {
 }, []);


async function addCustomer(values){
 const cSignup = await addCustomerDetails({
    custName:values.custName,
      custAddress:values.conName,custdtls:values.custdetails,
      })
   .then(result=>{
    if(result.message=='SUCCESSEM'){
      console.log(result);
       Message.success(
                'Customer Details stored sucessfully...!'
              ).then(() => 
              
             
            Router.push('/customer/customerList') 
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
        <Link href="/signin">
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
              addCustomer(values);
               
            }
          });
        }}
      >
           <FormItem label='Customer Name'>
            {form.getFieldDecorator('custName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
       <FormItem label='Customer Address'>
            {form.getFieldDecorator('conName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
         <FormItem label='Details'>
            {form.getFieldDecorator('custdetails', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        
      
        <FormItem>
          
          <Button type="primary" htmlType="submit" block className="mt-3">
           Save
          </Button>
        </FormItem>
       
        </Form>
    </Content>
  </Row>
  </div>
  );
};

export default Form.create()(Customer);
