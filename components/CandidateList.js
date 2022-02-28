import React from 'react';
import { Card, Divider } from 'antd';
import { Table, Input, Button, Icon ,Message} from 'antd';
import { useRouter } from "next/router";
import { withRouter } from 'next/router';
import {getCandidateList,deleteCandidate} from '../config/appServices';
import Link from 'next/link';


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
   console.log('CUSTOMERR ID IS'+this.props.router.query.id );
   this.getCandidate();
  }

  getCandidate=async()=>{
    const data = await getCandidateList()
    .then(result=>{
     if(result.message=='SUCCESS'){
     console.log(result.data.candidate_details);
       this.setState({
        candData:result.data.candidate_details
       })
      
     }
     else{
     }
    });
  }

getIssue=async(val)=>{
     const data = await deleteCandidate({candId:val})
    .then(result=>{
      console.log(result);
      if(result.message=='SUCCESS'){
      
       Message.success(
                'Candidate Data deleted sucessfully...!'
              ).then(() => 
            console.log('success'),
            this.getCandidate(),
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
        dataIndex: 'canFirstname',
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
          record.canFirstname.toLowerCase().includes(value.toLowerCase()),
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
      title: "Telephone",
      dataIndex: "Cantel",
      width: 150
    },
    {
      title: "Email",
      dataIndex: "Canemail",
      width: 150
    },
    {
      title: "Job Looking For",
      dataIndex: "JoblookingFor",
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
       <Link href={`/question/${record.candId}`}> 
      <a ><Icon type="question" /></a> 
      </Link>  
        <Divider type="vertical" />
        <Link href={`/candidate/show/${record.candId}`}>
        <a ><Icon type="eye" /></a>
         </Link> 
        <Divider type="vertical" />
         <Link href={`/candidate/${record.candId}`}>
        <a ><Icon type="edit" /></a>
        </Link> 
         <Divider type="vertical" />
         <a><Icon type="delete" onClick={() =>this.getIssue(record.candId)}/></a> 
      </span>
    )
  }
    ];
    return <Table columns={columns} dataSource={this.state.candData} 
    rowSelection={rowSelection}  rowKey={record => record.candId}  
    className="px-3 bg-white mh-page"
    scroll={{ x: 1500, y: 300 }}
    expandedRowRender={record => (
              <p style={{ margin: 0 }}>{record.canTitle} {record.canFirstname} {record.canSurname}</p>
            )}
     pagination= { {pageSizeOptions: ['10', '20'], pageSize: 10 ,showSizeChanger: true}}/>;
  }
}

export default withRouter(App); 
