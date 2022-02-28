import { Card, Divider } from 'antd';
import { Button, Checkbox, Form, Input, Message, Row,Col,Select,Icon } from 'antd';
import styled from 'styled-components';
import FixedColumnsHeader from './controls/fixed-columns-header';
import {getCandidateList,deleteCandidate} from '../config/appServices';
import { Table } from 'antd';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Router from 'next/router';
const Content = styled.div`
  width: 100%;
  z-index: 2;
  min-width: 300px;
`;

function CandidateList() {

const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true); 
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
     const data = await getCandidateList()
    .then(result=>{
     if(result.message=='SUCCESS'){
     console.log(result.data.candidate_details);
       setstate(
        result.data.candidate_details.map(row => ({
            Name:  row.canFirstname +' '+ row.canSurname ,
            Email: row.Canemail,
            Telephone:row.Cantel,
            JobLookingFor:row.JoblookingFor,
            Qualifation:row.Qualifation,
            Cannationality:row.Cannationality,
            id: row.candId
          }))
        );
      
     }
     else{
     }

    });

    }
   
   const getIssue=async(val)=>{
     const data = await deleteCandidate({candId:val})
    .then(result=>{
      console.log(result);
      if(result.message=='SUCCESS'){
      
       Message.success(
                'Candidate Data deleted sucessfully...!'
              ).then(() => 
            console.log('success'),
            getData(),
            // Router.push('/candidate/candidateList')
             );
    }
    else{
      Message.success(
                'There are some problem in Server Please try again...!'
              )
    }
    })
   }
 

 
 const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 150
    },
    {
      title: "Telephone",
      dataIndex: "Telephone",
      width: 150
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 150
    },
    {
      title: "Job Looking For",
      dataIndex: "JobLookingFor",
      width: 150
    },
    {
      title: "Qualifation",
      dataIndex: "Qualifation",
      width: 150
     },
     {
      title: "Nationality",
      dataIndex: "Cannationality",
      width: 150
    },
     {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
     render: (text, record) => (
      <span>
       <Link href={`/question/${record.id}`}> 
      <a ><Icon type="question" /></a> 
      </Link>  
        <Divider type="vertical" />
        <Link href={`/candidate/show/${record.id}`}>
        <a ><Icon type="eye" /></a>
         </Link> 
        <Divider type="vertical" />
         <Link href={`/candidate/${record.id}`}>
        <a ><Icon type="edit" /></a>
        </Link> 
         <Divider type="vertical" />
         <a><Icon type="delete" onClick={() =>getIssue(record.id)}/></a> 
      </span>
    )
  }

  ];


    return (
      <div>
  <Row
    align="left"
    className="px-3 bg-white mh-page" 
    style={{ minHeight: '100vh' }} 
  >
    <Content>
      <Card bodyStyle={{ padding: 0 }} id="components-button-demo">
       

        <Divider orientation="left">
          <small>Candidate List</small>
        </Divider>
        <div className="p-4">
            <Table columns={columns} dataSource={state} scroll={{ x: 1500, y: 300 }}
            expandedRowRender={record => (
              <p style={{ margin: 0 }}>{record.Name}</p>
            )}
                 pagination= { {pageSizeOptions: ['10', '20'], pageSize: 10 ,showSizeChanger: true}}/>

          

        </div>

       
      </Card>
      </Content>
      </Row></div>
    );
 
}

export default CandidateList;
