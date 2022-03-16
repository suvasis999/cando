import React, { useEffect,useState } from 'react';
import { useRouter } from "next/router";
import { Button, Checkbox, Form, Input, Message, Row,Col,Select,Steps ,DatePicker} from 'antd';
import { Eye, Mail, Triangle } from 'react-feather'; 

import Link from 'next/link'; 
import Router from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import Textarea from '../../components/controls/textarea'; 
import Basic from '../../components/controls/basic';
import multiple from '../../components/controls/multiple';
import {getCandidateList,editCandidate,editCandidateEmp,candeditAvail,candeditWorkexp,
candeditEmergencyCont,candeditAccountDtls,getCandidatedetails,getCandidateemployerdetails,
getCandidateavaildetails,getCandidateworddetails,getCandidateemcontact,
getCandidateacdtls,getCityArr} 
from '../../config/appServices'; 
import moment from 'moment';

const { Step } = Steps;
const { Item } = Form;

const FormItem = Form.Item;

const Content = styled.div`
  width: 100%;
  z-index: 2;
  min-width: 300px;
`; 



const Candidate = ({ form }) => { 
const [data, setData] = React.useState([]); 
const [uid, setUid] = React.useState([]);
const [address, setAddress] = React.useState('');
const [dtls, setDtls] = React.useState('');
const [current, setCurrent] = React.useState(0);
const dispatch=useDispatch();
const [state, setcanDtls] = useState({}); 
const [city,setCity]=React.useState([]);
const router = useRouter()


useEffect(() => {
  getCandidate();
   getCiity();
}, [router]);

 async function getCiity(){
    const data = await getCityArr()
    .then(result=>{
      if(result.message=='SUCCESS'){
        console.log(result.data.city_detailss);
       setCity(result.data.city_detailss)
        }

      })
  }
async function getCandidate(){
   const { id} = router.query;
   const data = await getCandidatedetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        
         form.setFieldsValue({Title: result.data.candidate_details.canTitle});
         form.setFieldsValue({Surname: result.data.candidate_details.canSurname});
         form.setFieldsValue({FirstName: result.data.candidate_details.canFirstname});
         form.setFieldsValue({address: result.data.candidate_details.canCuraddress});
         form.setFieldsValue({addressTwo: result.data.candidate_details.canAddresstwo});
         form.setFieldsValue({pickloc: result.data.candidate_details.pickuploc});
         form.setFieldsValue({city: result.data.candidate_details.city});
         form.setFieldsValue({tel: result.data.candidate_details.Cantel});
         form.setFieldsValue({email: result.data.candidate_details.Canemail});
         form.setFieldsValue({Ni: result.data.candidate_details.CanNino});
         form.setFieldsValue({Nationality: result.data.candidate_details.Cannationality});
         form.setFieldsValue({dl: result.data.candidate_details.CanDl});
         form.setFieldsValue({OwnTransport: result.data.candidate_details.canTransport});
         form.setFieldsValue({Hhc: result.data.candidate_details.Howdidyouhear});
         form.setFieldsValue({jlc: result.data.candidate_details.JoblookingFor});
         form.setFieldsValue({LEL: result.data.candidate_details.levelOfEnglish});
         form.setFieldsValue({Olang: result.data.candidate_details.Otherlang});
         form.setFieldsValue({Qualification: result.data.candidate_details.Qualifation});

      }
    })
}

async function getCandidateEmployee(){

   const {id} = router.query;
   const data = await getCandidateemployerdetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        const datadtls=result.data.cand_employe_dtls[0];
         form.setFieldsValue({emplname: datadtls.emplouyerName});
         form.setFieldsValue({stdate: moment(datadtls.startDate)});
         form.setFieldsValue({endate: moment(datadtls.endDate)});
         form.setFieldsValue({skillgain: datadtls.skillGain});
         

      }
    })
}



async function getCandidateavailable(){
    const {id} = router.query;
   const data = await getCandidateavaildetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
         const datadtls=result.data.cand_avilability[0];
         form.setFieldsValue({dyw: datadtls.daysyouwork});
         form.setFieldsValue({shw: datadtls.shift});
         form.setFieldsValue({cwic: datadtls.isCold});
       }
    })
}

async function getCandidateword(){
    const {id} = router.query;
   const data = await getCandidateworddetails(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
         const datadtls=result.data.cand_work_reference[0];
         form.setFieldsValue({workcomName: datadtls.compName});
         form.setFieldsValue({workconName: datadtls.contName});
         form.setFieldsValue({workcomEmail: datadtls.Email});
         
       }
    })
}
async function getCandidateemcon(){
    const {id} = router.query;
   const data = await getCandidateemcontact(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
         const datadtls=result.data.cand_imregency_cont[0];
         form.setFieldsValue({emcomName: datadtls.name});
         form.setFieldsValue({emconTelno: datadtls.tel});
         form.setFieldsValue({emRelation: datadtls.Relation});
       }
    })
}

async function getCandidateac(){
    const {id} = router.query;
   const data = await getCandidateacdtls(id)
    .then(result=>{
      if(result.message=='SUCCESS'){
         const datadtls=result.data.cand_acount_dtls[0];
         form.setFieldsValue({bankName: datadtls.bankName});
         form.setFieldsValue({AcHolName: datadtls.acHoldername});
         form.setFieldsValue({acName: datadtls.acNo});
         form.setFieldsValue({shCode: datadtls.shortCode});
         
       }
    })
}



async function editCand(values){
const { id} = router.query;
  const cSignup = await editCandidate({canTitle:values.Title,
      canSurname:values.Surname,
      canFirstname:values.FirstName,canCuraddress:values.address,
      canAddresstwo:values.addressTwo,city:values.city,
      pickuploc:values.pickloc,
      CantypeOfproofadd:0,Cantel:values.tel,
      Canemail:values.email,CanNino:values.Ni,Cannationality:values.Nationality,
      CanDl:values.dl,CanDlfile:0,
      canTransport:values.OwnTransport,Howdidyouhear:values.Hhc,
      HowdidyouhearDtls:'other',JoblookingFor:values.jlc,
      levelOfEnglish:values.LEL,Otherlang:values.Olang,Qualifation:values.Qualification,
      candId:id})
   .then(result=>{
    console.log(result);
    if(result.message=='SUCCESS'){
      console.log(result);
       Message.success(
                'Candidate Details update sucessfully...!'
              ).then(() => 
              console.log('success'),
            // Router.push('/candidate/candidateList')
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
}



async function editCandEmp(values){
  const { id} = router.query;
 const cSignup = await editCandidateEmp({canId:uid,
    emplouyerName:values.emplname,
      startDate:values.stdate,endDate:values.endate,
      skillGain:values.skillgain, candId:id})
   .then(result=>{
    if(result.message=='SUCCESS'){
      console.log(result);
       Message.success(
                'Employer Details updated sucessfully...!'
              ).then(() => 
              
              console.log(result)
            // Router.push('/candidate/candidateList')
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
}

async function editCandAvl(values){
  const { id} = router.query;
 const cSignup = await candeditAvail({
    daysyouwork:values.dyw,
    shift:values.shw,isCold:values.cwic,candId:id})
   .then(result=>{
    console.log(result);
    if(result.message=='SUCCESS'){
      
       Message.success(
                'Candidate Availability stored sucessfully...!'
              ).then(() => 
              
              console.log(result)
            // Router.push('/candidate/candidateList')
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
}

async function editCandWord(values){
  const { id} = router.query;
  const cSignup = await candeditWorkexp({canId:uid,
    compName:values.workcomName,
    contName:values.workconName,Email:values.workcomEmail,candId:id})
   .then(result=>{
    if(result.message=='SUCCESS'){
      
       Message.success(
                'Candidate Work Experience updated sucessfully...!'
              ).then(() => 
              
              console.log(result)
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
} 
async function editCandEmergency(values){
  const { id} = router.query;
  console.log(values);
  const cSignup = await candeditEmergencyCont({canId:uid,
    name:values.emcomName,
    tel:values.emconTelno,Relation:values.emRelation,candId:id})
   .then(result=>{
    console.log(result);
    if(result.message=='SUCCESS'){
      
       Message.success(
                'Candidate Emergency Contact Details updated sucessfully...!'
              ).then(() => 
              
              console.log(result)
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
}


async function addCandAc(values){
  console.log(values); bankName,AcHolName,acName,shCode
  const cSignup = await candAccountDtls({canId:uid,
    bankName:values.bankName,
    acHoldername:values.AcHolName,acNo:values.acName,shortCode:values.shCode})
   .then(result=>{
    if(result.message=='SUCCESS'){
      
       Message.success(
                'Candidate Account Details stored sucessfully...!'
              ).then(() => 
              
              Router.push('/candidate/candidateList')
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
}

async function editCandAc(values){
   const { id} = router.query;
  console.log(values); bankName,AcHolName,acName,shCode
  const cSignup = await candeditAccountDtls({canId:uid,
    bankName:values.bankName,
    acHoldername:values.AcHolName,acNo:values.acName,shortCode:values.shCode,candId:id})
   .then(result=>{
    if(result.message=='SUCCESS'){
      
       Message.success(
                'Candidate Account Details stored sucessfully...!'
              ).then(() => 
              
              Router.push('/candidate/candidateList')
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
   });
}

 function handleChange(value) {
console.log(`selected ${value}`); 
}

function handleChangeAddress(event){
  console.log(event);
  setAddress(event);
}

function handleChangeDetails(event){
  console.log(event);
  setDtls(event);
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
        <h5 className="mb-0 mt-3">Candidate Registration</h5>

        <p className="text-muted">get started with our service</p>
      </div>

      <Steps current={current}>
        <Step key={0} title="Candidate Details" />
        <Step key={1} title="Employer Details" />
        <Step key={2} title="Availability" />
        <Step key={3} title="Work Reference" />
        <Step key={4} title="Emergency Contact" />
        <Step key={5} title="Acount Details" />
      </Steps>
    {/*STEP ONE///////////////////////////////////////////////////*/}
      {current === 0 && (
      <Form
        onSubmit={e => {
          
          e.preventDefault();
          
          form.validateFields((err, values) => {
            if (!err) {
              editCand(values);
              setCurrent(current + 1);
              getCandidateEmployee();
            }
          });
        }}
      >

      <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Title'>
            {form.getFieldDecorator('Title', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder"  />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Surname'>
            {form.getFieldDecorator('Surname', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='First Name'>
            {form.getFieldDecorator('FirstName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)} 
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Current Address">
          {form.getFieldDecorator('address', {
            rules: [
             
              {
                required: true,
                message: 'Please enter your Current Address!'
              }
            ]
          })(
             <Input placeholder="Enter Address" /> 
          )}
        </FormItem>
        <FormItem label="Address Two">
          {form.getFieldDecorator('addressTwo', {
            rules: [
             
              {
                required: false,
                message: 'Please  Address Two!' 
              }
            ]
          })(
             <Input placeholder="Enter Address Two" /> 
          )}
        </FormItem>
        <FormItem label="Pickup Location">
          {form.getFieldDecorator('pickloc', {
            rules: [
             
              {
                required: false,
                message: 'Please  Enter Pickup Location!'
              }
            ]
          })(
             <Input placeholder="Enter Pickup Location" /> 
          )}
        </FormItem>
      <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='City'>
            {form.getFieldDecorator('city', {
              rules: [
                {
                  required: true,
                  message: 'Enter City!'
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
          <FormItem label='Telephone'>
            {form.getFieldDecorator('tel', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label="Email">
          {form.getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!' 
              }
            ]
          })(
            <Input
              prefix={
                <Mail
                  size={16}
                  strokeWidth={1}
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
              type="email"
              placeholder="Email"
            />
          )}
        </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Ni. Number. '>
            {form.getFieldDecorator('Ni', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Nationality '>
            {form.getFieldDecorator('Nationality', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Driving License '>
            {form.getFieldDecorator('dl', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        
        {/*<Col span={8} style={{ display: 'block'}}>
           <FormItem label='Dl. File'>
            {form.getFieldDecorator('dlFile', {
              rules: [
                {
                  required: true,
                  message: 'Upload Dl. File!'
                }
              ]
            })(<Basic />)} 
          </FormItem>
        </Col>*/}
        <Col span={12} style={{ display: 'block'}}>
          <FormItem label='Own Transport '>
            {form.getFieldDecorator('OwnTransport', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(
            <Select defaultValue="Yes"  onChange={(val) => handleChange(val)}> 
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
            
          </Select>
    )}
          </FormItem>
        </Col>
         <Col span={12} style={{ display: 'block'}}>
          <FormItem label='How did you hear about our company'>
            {form.getFieldDecorator('Hhc', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(
            <Select defaultValue="Website"  onChange={(val) => handleChange(val)}>
            <Option value="Website">Website</Option>
            <Option value="Friend">Friend</Option>
            <Option value="Shop window advert">Shop window advert</Option>
            <Option value="Other">Other</Option>
          </Select>
    )}
          </FormItem>
        </Col>
      </Row>

      {/*<FormItem label="Details">
          {form.getFieldDecorator('detailshhc', {
            rules: [
             
              {
                required: true,
                message: 'Enter Details!'
              }
            ]
          })(
             <Textarea   onChange={(val) => handleChangeDetails(val)} /> 
          )}
        </FormItem>*/}
        <Row gutter={24}>
        
        <Col span={8} style={{ display: 'block'}}>
           <FormItem label='Job looking for'>
            {form.getFieldDecorator('jlc', {
              rules: [
                {
                  required: true,
                  message: 'Enter Something!'
                }
              ]
            })(<Input placeholder="placeholder" />)} 
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Level of English Language '>
            {form.getFieldDecorator('LEL', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(
            <Select defaultValue="Basic"  onChange={() => handleChange()}>
            <Option value="Basic">Basic</Option>
            <Option value="Good">Good</Option>
            <Option value="Fluent">Fluent</Option>
          </Select>
    )}
          </FormItem>
        </Col>
         <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Other Language'>
            {form.getFieldDecorator('Olang', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(
            <Input placeholder="placeholder" />
    )}
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Qualification">
          {form.getFieldDecorator('Qualification', {
            rules: [
             
              {
                required: true,
                message: 'Please enter your Qualification!'
              }
            ]
          })(
             <Input placeholder="placeholder" /> 
          )}
        </FormItem> 
        
          <Row gutter={24}>
          <Col span={12} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="submit" block className="mt-3">
                Update
              </Button>
            </FormItem>
          </Col>
          <Col span={12} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{  setCurrent(current + 1);getCandidateEmployee();}}
              >
                Next
              </Button>
            </FormItem>
          </Col>
          </Row>

        <div className="text-center">
          <small className="text-muted">
            <span>Don't have an account yet?</span>{' '}
            <Link href="/signup">
              <a>&nbsp;Create one now!</a>
            </Link>
          </small>
        </div>
      </Form>
      )}
{/*STEP ONE///////////////////////////////////////////////////*/}
{/*STEP TWO///////////////////////////////////////////////////*/}
       {current === 1 && (
        <Form
        onSubmit={e => {
          
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
              editCandEmp(values);
              setCurrent(current + 1);
              getCandidateavailable();

            }
          });
        }}
      >
             <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Employer Name'>
            {form.getFieldDecorator('emplname', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Start Date'>
            {form.getFieldDecorator('stdate', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]  
            })(<DatePicker onChange={onChange} format='YYYY-MM-DD'/>)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='End Date'>
            {form.getFieldDecorator('endate', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<DatePicker onChange={onChange} format='YYYY-MM-DD'/>)} 
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Skill Gains">
          {form.getFieldDecorator('skillgain', {
            rules: [
             
              {
                required: true,
                message: 'Please enter !'
              }
            ]
          })(
             <Input placeholder="Skill Gains" /> 
          )}
        </FormItem>
        <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current - 1);getCandidate();}}
              >
                Previous
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current + 1);getCandidateavailable();}}
              >
                Next
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="submit" block className="mt-3">
                Update
              </Button>
            </FormItem>
          </Col>
          
          </Row>
         </Form>
        )}
{/*STEP TWO///////////////////////////////////////////////////*/}

{/*STEP THREE///////////////////////////////////////////////////*/}
       {current === 2 && (
        <Form
        onSubmit={e => {
          
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
             editCandAvl(values);
              setCurrent(current + 1);
              getCandidateword();
            }
          });
        }}
      >
             <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Days you Work'>
            {form.getFieldDecorator('dyw', {
              rules: [
                {
                  required: true,
                  message: 'Select something!'
                }
              ] 
            })(
            <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['Monday']}
            onChange={handleChange}
          >
            <Option value='Monday'>Monday</Option>
            <Option value='Tuesday'>Tuesday</Option>
            <Option value='Wednesday'>Wednesday</Option>
            <Option value='Thursday'>Thursday</Option>
            <Option value='Friday'>Friday</Option>
            <Option value='Saturday'>Saturday</Option>
            <Option value='Sunday'>Sunday</Option>
          </Select>
          )}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Shifts you work'>
            {form.getFieldDecorator('shw', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['Morning']}
            onChange={handleChange}
          >
            <Option value='Morning'>Morning</Option>
            <Option value='Afternoon'>Afternoon</Option>
            <Option value='Night'>Night</Option>
            
          </Select>)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Can work in Cold?'>
            {form.getFieldDecorator('cwic', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Select
          
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['yes']}
            onChange={handleChange}
          >
            <Option value='Yes'>Yes</Option>
            <Option value='No'>No</Option>
           
          </Select>)} 
          </FormItem>
        </Col>
      </Row>
     
        <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current - 1);getCandidateEmployee();}}
              >
                Previous
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ 
               setCurrent(current + 1);
                getCandidateword();
              }}
              >
                Next
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="submit" block className="mt-3">
                Update
              </Button>
            </FormItem>
          </Col>
          
          </Row>
         </Form>
        )}
{/*STEP THREE///////////////////////////////////////////////////*/}


{/*STEP FOUR///////////////////////////////////////////////////  */}
       {current === 3 && (
        <Form
        onSubmit={e => {
          
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
               editCandWord(values);
               setCurrent(current + 1);
               getCandidateemcon();
            }
          });
        }}
      >
             <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Company Name'>
            {form.getFieldDecorator('workcomName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Contact Name'>
            {form.getFieldDecorator('workconName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Email'>
            {form.getFieldDecorator('workcomEmail', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      </Row>
      
        <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current - 1);getCandidateavailable();}}
              >
                Previous
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current + 1);getCandidateemcon();}}
              >
                Next
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="submit" block className="mt-3">
                Update
              </Button>
            </FormItem>
          </Col>
          
          </Row>
         </Form>
        )}
{/*STEP FOUR///////////////////////////////////////////////////*/}

{/*STEP FIVE///////////////////////////////////////////////////*/}
       {current === 4 && (
        <Form
        onSubmit={e => {
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
              editCandEmergency(values);
             setCurrent(current + 1);
             getCandidateword();
            }
          });
        }}
      >
             <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Contact Name'>
            {form.getFieldDecorator('emcomName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Telephone No'>
            {form.getFieldDecorator('emconTelno', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={8} style={{ display: 'block'}}>
          <FormItem label='Relation'>
            {form.getFieldDecorator('emRelation', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      </Row>
      
        <Row gutter={24}>
        <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current - 1);getCandidateword();}}
              >
                Previous
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current + 1);getCandidateac();}}
              >
                Next
              </Button>
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="submit" block className="mt-3">
                Update
              </Button>
            </FormItem>
          </Col>
          
          </Row>
         </Form>
        )}
{/*STEP FIVE///////////////////////////////////////////////////*/}


{/*STEP SIX///////////////////////////////////////////////////*/}
       {current === 5 && (
        <Form
        onSubmit={e => {
          
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
              console.log(values);
              editCandAc(values);
            }
          });
        }}
      >
             <Row gutter={24}>
        <Col span={6} style={{ display: 'block'}}>
          <FormItem label='Bank Name'>
            {form.getFieldDecorator('bankName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={6} style={{ display: 'block'}}>
          <FormItem label='Ac. Holder Name'>
            {form.getFieldDecorator('AcHolName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={6} style={{ display: 'block'}}>
          <FormItem label='Acount Name'>
            {form.getFieldDecorator('acName', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
        <Col span={6} style={{ display: 'block'}}>
          <FormItem label='Short Code'>
            {form.getFieldDecorator('shCode', {
              rules: [
                {
                  required: true,
                  message: 'Input something!'
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      </Row>
      
        <Row gutter={24}>
        <Col span={12} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="button" block className="mt-3"
              onClick={()=>{ setCurrent(current - 1);getCandidateemcon();}}
              >
                Previous
              </Button>
            </FormItem>
          </Col>
          
          <Col span={12} style={{ display: 'block'}}>
           <FormItem>
              <Button type="primary" htmlType="submit" block className="mt-3">
                Update
              </Button>
            </FormItem>
          </Col>
          
          </Row>
         </Form>
        )}
{/*STEP SIX///////////////////////////////////////////////////*/}

    </Content>
  </Row>
  </div>
  );
};

export default Form.create()(Candidate);
