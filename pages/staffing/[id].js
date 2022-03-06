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

import {getCustomerdetails,editCustomerDetails,
  getStaffingListwithCustDetails,editShiftingDetails} 
from '../../config/appServices';
import { useRouter } from "next/router";
import moment from 'moment';
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
const [canid, setCanid] = React.useState([]);
const [custid, setCustid] = React.useState([]);
const [custName, setcustName] = React.useState('');
const [candName, setcandName] = React.useState('');
const [candSurName, setcandSurName] = React.useState('');
const [shiftDate, setshiftDate] = React.useState('');
const [shiftTime, setshiftTime] = React.useState('');
const dispatch=useDispatch();
const router = useRouter() 

useEffect(() => {
   const { id} = router.query; 
   console.log(id);
   getCustomer();
 }, []);


async function getCustomer(){
   const { id} = router.query;

   const data = await getStaffingListwithCustDetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        console.log(result.data.staffing_details[0]);
        setcustName(result.data.staffing_details[0].custName);
        setcandName(result.data.staffing_details[0].canFirstname);
        setcandSurName(result.data.staffing_details[0].canSurname);
        setCanid(result.data.staffing_details[0].candId);
        setCustid(result.data.staffing_details[0].custiId);
        form.setFieldsValue({shiftTime: result.data.staffing_details[0].shiftTime});
        form.setFieldsValue({stdate: moment(result.data.staffing_details[0].date)});
        
        }
      })
  }
async function editCustomer(values){
  const { id} = router.query;
  console.log(values);
 const cSignup = await editShiftingDetails({
        candId:canid,
        custiId:custid,shiftTime:values.shiftTime,date:values.stdate,staffid:id
      })
   .then(result=>{
    if(result.message=='SUCCESS'){
      console.log(result);
       Message.success(
                'Staffing Details update sucessfully...!'
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
       
          <a className="brand mr-0">
            <Triangle size={32} strokeWidth={1} />
          </a>
        
        <h5 className="mb-0 mt-3">Update Staffing</h5>

       
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
           <p><b>Customer Name</b> : {custName}</p>
       
             <p><b>Candidate Name</b> : {candName}  {candSurName}</p>

          <FormItem label='Shift Date'>
            {form.getFieldDecorator('stdate', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]  
            })(<DatePicker
            style={{ width: '100%' }}
             onChange={(value) => {
             setshiftDate(moment(value).format("YYYY-MM-DD"))
             
            }}  format='YYYY-MM-DD'/>)}
          </FormItem>


           <FormItem label='Shift Time'>
            {form.getFieldDecorator('shiftTime', {
              rules: [
                {
                  required: true,
                  message: 'Select Shift Time'
                }
              ]
            })(
            
            <Select
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['12:00 AM']}
             onChange={(value) => {
             setshiftTime(value)
            }} 
          >
            <Option value='12:00 AM'>12:00 AM</Option>
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
          </Select>
          )}
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
