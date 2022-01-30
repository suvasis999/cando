import { Card, Divider } from 'antd';
import { Button, Checkbox, Form, Input, Message, Row,Col,Select,Icon } from 'antd';
import styled from 'styled-components';
import FixedColumnsHeader from './controls/fixed-columns-header';
import {getCustomerList} from '../config/appServices';
import { Table } from 'antd';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Router from 'next/router';
const Content = styled.div`
  width: 100%;
  z-index: 2;
  min-width: 300px;
`;

function CustomerList() {

const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
     const data = await getCustomerList()
    .then(result=>{
     if(result.message=='SUCCESS'){
     console.log(result.data.customer_dtls);
       setstate(
        result.data.customer_dtls.map(row => ({
            Name: row.custName,
            Address: row.custAddress
          }))
        );
      
     }
     else{
     
     }

    });

   
      }
   
 
 const columns = [

    {
      title: "Name",
      dataIndex: "Name",
      width: 150,
     },
    {
      title: "Address",
      dataIndex: "Address",
      width: 500,
     },
     {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
     render: (text, record) => (
      <span>
       
        <Divider type="vertical" />

        <a href="javascript:;"><Icon type="eye" /></a>
        <Divider type="vertical" />
        <a href="javascript:;"><Icon type="edit" /></a> 
         <Divider type="vertical" />
        <a href="javascript:;"><Icon type="delete" /></a> 
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
          <small>Customer List</small>
        </Divider>
        <div className="p-4">
            <Table columns={columns} dataSource={state} scroll={{ x: 1500, y: 300 }}
             expandedRowRender={record => (
              <>
              <p style={{ margin: 0 }}>Add Candidate</p>
              <Button type="primary" icon="arrow" size="large">
               Recruit candidates
              </Button>
              </>
            )}
             />

        </div>

       
      </Card>
      </Content>
      </Row></div> 
    );
 
}

export default CustomerList;
 