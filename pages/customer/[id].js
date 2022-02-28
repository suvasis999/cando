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
import {getCustomerdetails,editCustomerDetails} 
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
const dispatch=useDispatch();
const router = useRouter() 

useEffect(() => {
  getCustomer();
 }, []);


async function getCustomer(){
   const { id} = router.query;
   const data = await getCustomerdetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        console.log(result.data.customer_dtls);
        form.setFieldsValue({custName: result.data.customer_dtls.custName});
        form.setFieldsValue({conName: result.data.customer_dtls.custAddress});
        form.setFieldsValue({custdetails: result.data.customer_dtls.custdtls});

        }
      })
  }
async function editCustomer(values){
  const { id} = router.query;
 const cSignup = await editCustomerDetails({
        custName:values.custName,
        custAddress:values.conName,custdtls:values.custdetails,comDtlsId:id
      })
   .then(result=>{
    if(result.message=='SUCCESS'){
      console.log(result);
       Message.success(
                'Customer Details update sucessfully...!'
              ).then(() => 
              
             
            getCustomer()
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
              editCustomer(values);
               
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
           Update
          </Button>
        </FormItem>
       
        </Form>
    </Content>
  </Row>
  </div>
  );
};

export default Form.create()(Customer);
