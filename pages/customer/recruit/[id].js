import React from 'react';

import { Table, Input, Button, Icon,Card,Modal, Form as Component ,DatePicker,Select,Message} from 'antd';
import { useRouter } from "next/router";
import { withRouter } from 'next/router';
import {getCandidateList,getCustomerdetails,addShiftDetails,getCandidateShiftDetails,
  getCandidateListwithShift,addShiftDetailsArray} from '../../../config/appServices';
import moment from "moment";
import ReactDOM from "react-dom";
import Router from 'next/router';
class App extends React.Component {
   formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      currentState: "not-panic",
       selectedRowKeys: [],
       candData:[],
       custData:'',
       loading: false,
       visible: false,
       curDate: moment().format("DD-MM-YYYY"),
       shiftDate:'',
       shiftTime:'' ,
       candId:'',
       formKey:'',
       stafData:[],
       mobNoGroup:'',
       city:[]
    }
   
  }
 
 

 componentDidMount () {
   console.log('CUSTOMERR ID IS'+this.props.router.query.id );
   this.getCandidate();
   this.getCustomer();
   this.getCandidatewithShift();
  }

   showModal = () => {
    this.setState({
      visible: true 
    });
  };

  handlemultiple=async()=>{
     const {shiftDate,shiftTime,candId,selectedRowKeys}=this.state;
     this.setState({ loading: true }); 
   
     const data = await addShiftDetailsArray({candId:candId,
      custiId:this.props.router.query.id,
      shiftTime:shiftTime,date:shiftDate,candGroup:selectedRowKeys})
    .then(result=>{
      console.log(result);
     if(result.message=='SUCCESS'){
      Message.success(
        'Shifting Details stored sucessfully...!'
     )
     this.setState({ loading: false }); 
       this.setState({ visible: false });
       this.setState({formKey: (this.state.formKey || 0) + 1})
       this.getCandidate();
      
     }
     else if(result.message=='BUSY'){
           Message.success(
        'Candidate not avilable for this shift please chage shift details'
     )
           
       this.setState({ loading: false }); 
       this.setState({ visible: false });
       this.setState({formKey: (this.state.formKey || 0) + 1})
       this.getCandidate();
        }
        else{

        }
    });
  }

  handleOk = async() => {
    const {shiftDate,shiftTime,candId,selectedRowKeys}=this.state;
    this.setState({ loading: true }); 
   
     const data = await addShiftDetails({candId:candId,
      custiId:this.props.router.query.id,
      shiftTime:shiftTime,date:shiftDate,candGroup:selectedRowKeys})
    .then(result=>{
     if(result.message=='SUCCESS'){
      Message.success(
        'Shifting Details stored sucessfully...!'
     )
     this.setState({ loading: false }); 
       this.setState({ visible: false });
       this.setState({formKey: (this.state.formKey || 0) + 1})
       this.getCandidate();
      
     }
     else if(result.message=='BUSY'){
           Message.success(
        'Candidate not avilable for this shift please chage shift details'
     )
           
       this.setState({ loading: false }); 
       this.setState({ visible: false });
       this.setState({formKey: (this.state.formKey || 0) + 1})
       this.getCandidate();
        }
        else{

        }
    });
 
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  getCandidate=async()=>{
    const data = await getCandidateListwithShift()
    .then(result=>{
     if(result.message=='SUCCESS'){
    console.log(result.data.candidate_details);
       this.setState({
        candData:result.data.candidate_details

       })
      
     }
    
    });
  }

    getCustomer=async()=>{
    const data = await getCustomerdetails(this.props.router.query.id)
    .then(result=>{
      if(result.message=='SUCCESS'){
        console.log(result.data.customer_dtls);
        this.setState({
          custData:result.data.customer_dtls
        })
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
   //console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  recruitCand=(val)=>{
    
    this.setState({
      candId:val
    })
    this.showModal();
  }

  recruitCandall=()=>{
    this.showModal();
  }

  handleFormSubmit = event => {
    event.preventDefault();
  };

   redirect=(val)=>{
      console.log(val);
      Router.push(`/staffing/staffing/${val}`);  
    }

  getDetailsStaffing=async(val)=>{
    
    const data = await getCandidateShiftDetails(val)
    .then(result=>{
      if(result.message=='SUCCESS'){
        console.log(result.data.staffing_dtls);
        
        }
        else{
          console.log('data not found');
        }

      })

  }

  getCandidatewithShift=async()=>{
    

     const data = await getCandidateListwithShift()
    .then(result=>{
      if(result.message=='SUCCESS'){
       // console.log(result.data);
        
        }
        else{
          console.log('data not found');
        }

      })
  }

  selectRow = record => {
  console.log(record.candId);
  this.getDetailsStaffing(record.candId);
 
  const selectedRowKeys = [...this.state.selectedRowKeys];
  if (selectedRowKeys.indexOf(record.candId) >= 0) {
    selectedRowKeys.splice(selectedRowKeys.indexOf(record.candId), 1);
  } else {
    selectedRowKeys.push(record.candId);
  }
  this.setState({ selectedRowKeys });


  const mobNoGroup = [...this.state.mobNoGroup];
  if (mobNoGroup.indexOf(record.Cantel) >= 0) {
    mobNoGroup.splice(mobNoGroup.indexOf(record.Cantel), 1);
  } else {
    mobNoGroup.push(record.Cantel);
  }
  this.setState({ mobNoGroup });


}

  render() {
    console.log(this.state.mobNoGroup);
    const { selectedRowKeys,custData,visible, loading } = this.state;
     const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
      };
console.log(selectedRowKeys);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'canFirstname',
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
        title: 'Mobile No.',
        dataIndex:'Cantel',
        },
      {
        title: 'Address',
        dataIndex: 'canCuraddress',
      },
      {
    title: 'Action',
    key: 'operation',
    width: 150,
     render: (text, record) => {
      if(record.staffingDetails && record.staffingDetails.length>0){
      if (moment(record.shiftDatae).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")) {
          return (
          <>
         
         <Button type="primary" style={{ background: "#ff9900", borderColor: "yellow",color:'white' }}
         >
          Booked
        </Button>
        </>
         );
      }
      else{
        return (
        <>
         <Button type="primary"  onClick={this.recruitCandall}

         >
            Recruit
         </Button>
         </>
        );
      }
    }
    else{
      return (
        <>
         <Button type="primary"  onClick={this.recruitCandall}

         >
            Recruit
         </Button>
         </>
        );

    }
        
    }
  },
    ]; 

     return (
      <div className="bg-white">
      <Component ref={this.formRef} {...this.props}
        onSubmit={e => {
          e.preventDefault();
        }}
        key={this.state.formKey}
      >
       <Modal
          visible={visible}
          title="Staffing Details"
          onOk={this.handlemultiple}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Dismiss
            </Button>,
            <Button key="submit" loading={loading} onClick={this.handlemultiple}>
              Submit
            </Button>
          ]} 
        >
          
          <p><b>Customer Name</b> :{this.state.custData.custName}</p>
           <Component.Item label='Shift Date'>
            <DatePicker   
            disabledDate={(current) => {
              let customDate = moment().format("YYYY-MM-DD");
              return current && current < moment(customDate, "YYYY-MM-DD");
            }} 

            onChange={(value) => {
              this.setState({
                shiftDate:moment(value).format("YYYY-MM-DD")
              })
             
            }}  />
          </Component.Item>
          <Component.Item label='Shift Time' name='shiftTime'
          rules={[
                {
                required: true,
                message: 'Please input the title of collection!',
                },
                ]}
          >
            
            <Select
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['12:00 AM']}
             onChange={(value) => {
               this.setState({
                shiftTime:value
              })
            }} 
          >
            <Option value='12:00AM'>12:00 AM</Option>
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
         
          </Component.Item>

         
        </Modal>
         </Component>
        <div className="table-operations bg-white ">
          <div className="px-3 bg-white pt-2 pb-5">
            <Card title="Customer Details">
              <p>Name : {custData.custName}</p>
              <p>Address : {custData.custAddress}</p>
              <p>Details : {custData.custdtls}</p>
            </Card>
          </div>
           <div className="px-3 bg-white pb-5" >
            <Button type="primary" onClick={this.recruitCandall}> Recruit candidates</Button>
           </div>
        </div> 
      
      
     <Table columns={columns} dataSource={this.state.candData} 
    rowSelection={rowSelection}  rowKey={record => record.candId}  
    onRow={record => ({
      onClick: () => {
        this.selectRow(record);
      }
    })}
    className="px-3 bg-white mh-page"
    expandedRowRender={record => (
      record.staffingDetails && record.staffingDetails.length>0?
      <>
        <p><b>Todays Booking Status</b></p>
       <p style={{ margin: 0 }}> Hi <b>{record.canTitle}  {record.canFirstname} {record.canSurname} </b></p>
        {moment(record.shiftDatae).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")
        ? 
       <div>Your bookng status is 
       Booking date :<b>{moment().format("YYYY-MM-DD")} </b>
        <b>
         {
           record.candStatus==0  ? ' Not Confirmed ':' Confirmed'
         }
         </b>

       </div>
       :''}
        </>
        :
        <>
        <p style={{ margin: 0 }}> Hi <b>{record.canTitle}  {record.canFirstname} {record.canSurname} </b></p>
        <p>No record found</p>
        </>
      
    )}
     pagination= { {pageSizeOptions: ['10', '20'], pageSize: 10 ,showSizeChanger: true}}/>
     <div className="bg-white" style={{width: '100%',float: 'left'}}>
       <div className="px-3 bg-white pull-right pb-5 pt-2" style={{float:'right'}}>
         <Button type="primary" onClick={this.recruitCandall}> Recruit candidates</Button>
       </div>
    </div>


   

     </div>
    );

  }
}

App.Item = Component.Item;

export default withRouter(App); 


