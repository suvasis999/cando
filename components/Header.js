import { Avatar, Badge, Layout, List, Menu } from 'antd';
import {
  BarChart,
  Bell,
  ChevronsDown,
  Maximize,
  Minimize,
  Settings,
  Triangle 
} from 'react-feather';
import DashHeader, { Notification } from './styles/Header';

import Link from 'next/link';
import MockNotifications from '../demos/mock/notifications';
import { useAppState } from './shared/AppProvider';
import { useState } from 'react';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Router from 'next/router';

const { SubMenu } = Menu;
const { Header } = Layout;
import { useDispatch, useSelector } from "react-redux";

const mapStateToProps = state => {
 return { name: state.main.name } 
}



const MainHeader = (props) => {
   const { name} = props;
  const [state, dispatch] = useAppState();
  const [notifications] = useState(MockNotifications);
  const dispatchR=useDispatch();
 /* useEffect(() => {
    let isMounted = true;  
   if(name === 'guest' ){
    isMounted = false;
       Router.push('/signin');
   }
   isMounted = false;
  
 },[]);*/
 
 function logout(name) {
     
    dispatchR({ type: 'REMOVE_USER',payload:name});
    localStorage.removeItem("U_NAME");
  }

  return (
    <DashHeader>
      <Header>
        {state.mobile && (
          <a
            onClick={() => dispatch({ type: 'mobileDrawer' })}
            className="trigger"
          >
            <BarChart size={20} strokeWidth={1} />
          </a>
        )}
        <Link href="/">
          <a className="brand">
            <Triangle size={24} strokeWidth={1} />
            <strong className="mx-1 text-black">Cando</strong>
          </a>
        </Link> 

        

        <span className="mr-auto" />

        <Menu mode="horizontal">
          {!state.mobile && (
            <Menu.Item onClick={() => dispatch({ type: 'fullscreen' })}>
              {!state.fullscreen ? (
                <Maximize size={20} strokeWidth={1} />
              ) : (
                <Minimize size={20} strokeWidth={1} />
              )}
            </Menu.Item>
          )}
        
         <Menu.Item onClick={() => dispatch({ type: "options" })}>
            <Settings size={20} strokeWidth={1} />
          </Menu.Item>
          <SubMenu title={<Avatar src="/static/images/avatar.jpg" />}>
            
            <Menu.Item>Profile</Menu.Item>
           
            <Menu.Divider />
            
            <Menu.Item  onClick={() => logout("guest")} >Signout</Menu.Item>
          </SubMenu> 
        </Menu>
      </Header>
    </DashHeader>
  );
};


export default connect(mapStateToProps)(MainHeader);
