import React from 'react';
import { Card, Divider } from 'antd';
import { Table, Input, Button, Icon ,Message} from 'antd';
import { useRouter } from "next/router";
import { withRouter } from 'next/router';
import {getStaffingList,deleteCandidate,getStaffingListwithCust,deleteStaffingDetails} from '../config/appServices';
import Link from 'next/link';
import moment from "moment";

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      currentState: "not-panic",
       selectedRowKeys: [],
       candData:[],
       todayDate:moment().format("YYYY-DD-MM"),
    }
   
  }

 componentDidMount () {
   console.log('CUSTOMERR ID IS'+this.props.router.query.id );
   this.getCandidate();
  }

  getCandidate=async()=>{
    const data = await getStaffingListwithCust()
    .then(result=>{
    console.log(result.data.staffing_details);
     if(result.message=='SUCCESS'){
     console.log(result.data.staffing_details);
       this.setState({
        candData:result.data.staffing_details
       })
      
     }
     else{
     }
    });
  }

getIssue=async(val)=>{
     const data = await deleteStaffingDetails({candId:val})
    .then(result=>{
      console.log(result);
      if(result.message=='SUCCESS'){
      
       Message.success(
                'Staffing Data deleted sucessfully...!'
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

  getCan=()=>{
   this.state.candData.map((item, i) => { 
      return (
          [
              {
                key: item.id,
                candStatus: item.candStatus,
                candId: item.candId,
                custiId: item.custiId,
                date: item.date,
                shiftTime: item.shiftTime,
                stafid: item.stafid,
              }
          ]
       ) } );
  };



  render() {
    const { selectedRowKeys } = this.state;
    console.log(this.getCan());
     const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
      };

  


 const columns = [
      {
        title: 'Candidate Name',
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
      title: "Customer Name",
      dataIndex: "custName",
      width: 150
    },
    {
      title: "Shift Date",
      dataIndex: "date",
      width: 150
    },
    {
      title: "Shift Time",
      dataIndex: "shiftTime",
      width: 150
    },
    {
      title: "Shift Status",
      dataIndex: "candStatus",
      width: 150,
      render: (text, record) => {
      if (record.candStatus==0) {
          return (
          <>
          <p>Not Confirmed</p>
          </>
         );
      }
      else{
        return (
         <>
          <p>Confirmed</p>
          </>
        );
      }
        
    }
      
     },
      {
    title: 'Action',
    key: 'operation',
   
    width: 150,
     render: (text, record) => (
     moment(record.date).format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")?
      <span>
        
        <Link href={`/staffing/staffing/${record.stafid}`}>
        <a ><Icon type="eye" style={{color:'white'}}/></a>
         </Link> 
        <Divider type="vertical" />
         <Link href={`/staffing/${record.stafid}`}>
        <a ><Icon type="edit" style={{color:'white'}}/></a>
        </Link> 
         <Divider type="vertical" />
         <a><Icon type="delete" style={{color:'white'}} onClick={() =>this.getIssue(record.stafid)}/></a> 
         </span>
         :
         <span>
         <Link href={`/staffing/staffing/${record.stafid}`}>
        <a ><Icon type="eye" /></a>
         </Link> 
        <Divider type="vertical" />
         <Link href={`/staffing/${record.stafid}`}>
        <a ><Icon type="edit" /></a>
        </Link> 
         <Divider type="vertical" />
         <a><Icon type="delete" onClick={() =>this.getIssue(record.stafid)}/></a> 
         
       
      </span>
      
    )
  }
    ];

     


    return <Table columns={columns} dataSource={this.state.candData} 
    rowSelection={rowSelection}  rowKey={record => record.stafid}  
    className="px-3"
    rowClassName={(record, index) => record.candStatus == 0 ? 'table-row-light' :  'table-row-dark'}

    scroll={{ x: 1500, y: 600 }}
    pagination= { {pageSizeOptions: ['10', '20'], pageSize: 10 ,showSizeChanger: true}}/>;
  }
}

export default withRouter(App); 
