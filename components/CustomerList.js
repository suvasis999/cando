import React from 'react';
import { Card, Divider } from 'antd';
import { Table, Input, Button, Icon ,Message} from 'antd';
import { useRouter } from "next/router";
import { withRouter } from 'next/router';
import {getCustomerList,deleteCustomer} from '../config/appServices';
import Link from 'next/link';
import Router from 'next/router';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      currentState: "not-panic",
       selectedRowKeys: [],
       candData:[]
    }
   
  }

 componentDidMount () {
    this.getCustomer();
  }

  getCustomer=async()=>{
    const data = await getCustomerList()
    .then(result=>{
     if(result.message=='SUCCESS'){
     console.log(result.data.customer_dtls);
       this.setState({
        candData:result.data.customer_dtls
       })
      
     }
     else{
     }
    });
  }

getIssue=async(val)=>{
     const data = await deleteCustomer({custId:val})
    .then(result=>{
      console.log(result);
      if(result.message=='SUCCESS'){
      
       Message.success(
                'Customer Data deleted sucessfully...!'
              ).then(() => 
            console.log('success'),
            this.getCustomer(),
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

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  };

 onSelectChange = selectedRowKeys => {
   // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

    redirect=(val)=>{
      console.log(val);
      Router.push(`/customer/recruit/${val}`);
    }

  render() {
    const { selectedRowKeys } = this.state;
     const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
      };
console.log(selectedRowKeys);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'custName',
        width: 150,
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters
        }) => (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              value={selectedKeys[0]}
              onChange={e =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={this.handleSearch(selectedKeys, confirm)}
            />
            <Button
              type="primary"
              onClick={this.handleSearch(selectedKeys, confirm)}
            >
              Search
            </Button>
            <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon
            type="smile-o"
            style={{ color: filtered ? '#108ee9' : '#aaa' }}
          />
        ),
        onFilter: (value, record) =>
          record.custName.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },
        render: text => {
          const { searchText } = this.state;
          return searchText ? (
            <span>
              {text
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))
                .map(
                  (fragment, i) =>
                    fragment.toLowerCase() === searchText.toLowerCase() ? (
                      <span key={i} className="highlight">
                        {fragment}
                      </span>
                    ) : (
                      fragment
                    ) // eslint-disable-line
                )}
            </span>
          ) : (
            text
          );
        }
      },
      {
      title: "Address",
      dataIndex: "custAddress",
      width: 150
    },
    
      {
    title: 'Action',
    key: 'operation',
    width: 150,
     render: (text, record) => (
      <span>
       <Link href={`/customer/show/${record.comDtlsId }`}>
        <a ><Icon type="eye" /></a>
         </Link> 
        <Divider type="vertical" />
         <Link href={`/customer/${record.comDtlsId }`}>
        <a ><Icon type="edit" /></a>
        </Link> 
         <Divider type="vertical" />
         <a><Icon type="delete" onClick={() =>this.getIssue(record.comDtlsId )}/></a> 
      </span>
    )
  }
    ];
    return <Table columns={columns} dataSource={this.state.candData} 
    rowSelection={rowSelection}  rowKey={record => record.comDtlsId }  
    className="px-3 bg-white mh-page"
   
    expandedRowRender={record => (
              <>
              <div>
             
              </div>
               <Button type="primary" icon="arrow" size="large" onClick={()=>this.redirect(record.comDtlsId)}>
                 Recruit candidates
                </Button>
              </>
            )}
     pagination= { {pageSizeOptions: ['10', '20'], pageSize: 10 ,showSizeChanger: true}}/>;
  }
}

export default withRouter(App); 
