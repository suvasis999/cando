import { Container, Inner } from './styles/Page';
import { Layout, Spin } from 'antd';
import { useEffect, useState } from 'react';

import Header from './Header'; 
import SidebarMenu from './SidebarMenu';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/GlobalStyles';
import { useAppState } from './shared/AppProvider';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import Signin from './Signin';
const { Content } = Layout;

const NonDashboardRoutes = [ 
  '/signin',
  '/signup',
  '/forgot',
  '/lockscreen',
  '/_error'
];

const Page = ({ router, children }) => {
  const [loading, setLoading] = useState(true);
  const [state] = useAppState();
  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);
  const logStatus = useSelector(state => state.main);
  //const uname=localStorage.getItem('U_NAME');  
  const uname=typeof window !== 'undefined' ? localStorage.getItem('U_NAME') : null;//localStorage.getItem('U_NAME');

  useEffect(() => {
   
  setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]); 

  return (
    uname===null?(
     <Spin tip="Loading..." size="large" spinning={loading}>
      <ThemeProvider theme={theme}>
        <Container
          className={`${state.weakColor ? 'weakColor' : ''} ${
            state.boxed ? 'boxed shadow-sm' : ''
          }`}
        >
         
          <Layout className="workspace"> 
            

            <Layout>
              <Content>
                <Signin/>
              </Content>
            </Layout>
          </Layout>
        </Container>
      </ThemeProvider>
    </Spin>
      )
      :(
    <Spin tip="Loading..." size="large" spinning={loading}>
      <ThemeProvider theme={theme}>
        <Container
        >
          {!isNotDashboard && <Header />}
          <Layout className="workspace" style={{width:'100%'}}>
            {!isNotDashboard && (
              <SidebarMenu
                sidebarTheme={state.darkSidebar ? 'dark' : 'light'}
                sidebarMode={state.sidebarPopup ? 'vertical' : 'inline'}
                sidebarIcons={state.sidebarIcons}
                collapsed={state.collapsed}
              />
            )}

            <Layout>
              <Content>
                {!isNotDashboard ? <Inner>{children}</Inner> : children}
              </Content>
            </Layout>
          </Layout>
        </Container>
      </ThemeProvider>
    </Spin>
    )
  );
};

export default withRouter(Page);
