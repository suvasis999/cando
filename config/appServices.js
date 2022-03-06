import api from './api';
import {localhost} from './localhost';

export const apiUrl=api; 
const API_KEY='763A3733A9D7F3939FD8B585EA6A33E6';

export const getCandidateList = async() => { 
let result = {};
const url=''+localhost+'candidate_details/all?X-Api-Key='+API_KEY+'';
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };


 export const getStaffingList = async() => { 
let result = {};
const url=''+localhost+'staffing_dtls/all?X-Api-Key='+API_KEY+'';
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
 }; 


 export const getStaffingListwithCust = async() => { 
let result = {};
const url=''+localhost+'staffing_dtls/allwithCustomer?X-Api-Key='+API_KEY+'';
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
 };


 export const getStaffingListwithCustDetails = async(values) => { 
let result = {};
const url=''+localhost+'staffing_dtls/getDetails?X-Api-Key='+API_KEY+'&staffId='+values;;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
 };


 export const getCandidateListwithShift = async() => { 
let result = {};
const url=''+localhost+'candidate_details/getVariantList?X-Api-Key='+API_KEY+'';
console.log(url);
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };


export const getCandidateShiftDetails = async(values) => { 
let result = {};
const url=''+localhost+'staffing_dtls/detailStaff?X-Api-Key='+API_KEY+'&candId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	
            	if(Response.status==true){
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}
            	else if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}

            	else{
            		
            	}

            });
return result; 
  
 };


 export const deleteStaffingDetails = async(values) => {
 	 let result = {};
	const url=''+localhost+'staffing_dtls/delete';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
			console.log(Response);
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };



 export const getCandidatedetails = async(values) => { 
let result = {};
const url=''+localhost+'candidate_details/detail?X-Api-Key='+API_KEY+'&candId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 }; 

  export const getCustomerdetails = async(values) => { 
let result = {};
const url=''+localhost+'customer_dtls/detail?X-Api-Key='+API_KEY+'&comDtlsId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };  

 export const getCustomerdetailsArr = async(values) => { 
let result = {};
const url=''+localhost+'customer_dtls/detailarr?X-Api-Key='+API_KEY+'&comDtlsId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };


export const getCandidatedetailsArr = async(values) => { 
let result = {};
const url=''+localhost+'candidate_details/detailcan?X-Api-Key='+API_KEY+'&candId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };
 export const getCandidateemployerdetails = async(values) => { 
let result = {};
const url=''+localhost+'cand_employe_dtls/detail?X-Api-Key='+API_KEY+'&canId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };


 export const getCandidateavaildetails = async(values) => { 
let result = {};
const url=''+localhost+'cand_avilability/detail?X-Api-Key='+API_KEY+'&canId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };

 export const getCandidateworddetails = async(values) => { 
let result = {};
const url=''+localhost+'cand_work_reference/detail?X-Api-Key='+API_KEY+'&canId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };

 export const getCandidateemcontact = async(values) => { 
let result = {};
const url=''+localhost+'cand_imregency_cont/detail?X-Api-Key='+API_KEY+'&canId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };

 export const getCandidateacdtls = async(values) => { 
let result = {};
const url=''+localhost+'cand_acount_dtls/detail?X-Api-Key='+API_KEY+'&canId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };


 export const getCustomerList = async() => { 
let result = {};
const url=''+localhost+'customer_dtls/all?X-Api-Key='+API_KEY+'';
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
  
 };



 export const addCandidate = async(values) => {
 	 let result = {};
	const url=''+localhost+'candidate_details/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			result.uid=Response.regUserId
            	}

            });
return result; 
 };


 export const addShiftDetails = async(values) => {

 	 let result = {};
	const url=''+localhost+'staffing_dtls/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
			
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else if(Response.status==true){
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}
            	else{
            		result.message = 'BUSY'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
 };



export const addShiftDetailsArray = async(values) => {
 	
 	 let result = {};
	const url=''+localhost+'staffing_dtls/addArray';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
				console.log(Response);
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else if(Response.status==true){
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}
            	else{
            		result.message = 'BUSY'; 
	      			result.success = true;
	      			result.data = Response.data;
            	}

            });
return result; 
 };

export const deleteCandidate = async(values) => {
 	 let result = {};
	const url=''+localhost+'candidate_details/delete';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {

            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };
 
export const deleteCustomer = async(values) => {
 	 let result = {};
	const url=''+localhost+'customer_dtls/delete';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {

            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };


 export const editCandidate = async(values) => {
 	 let result = {};
	const url=''+localhost+'candidate_details/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
			console.log(Response);
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
	      			result.val=values;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			result.uid=Response.regUserId
            	}

            });
return result; 
 };

 export const editCustomerDetails = async(values) => {
 	let result = {};
	const url=''+localhost+'customer_dtls/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
			console.log(Response);
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
	      			result.val=values;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			result.uid=Response.regUserId
            	}

            });
return result; 
 };


 export const editShiftingDetails = async(values) => {
 	let result = {};
	const url=''+localhost+'staffing_dtls/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
			console.log(Response);
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
	      			result.val=values;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			result.uid=Response.regUserId
            	}

            });
return result; 
 };



 export const addCandidateEmp = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_employe_dtls/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESSEM'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };

 

 export const editCandidateEmp = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_employe_dtls/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };

 export const addCustomerDetails = async(values) => {
 	 let result = {};
	const url=''+localhost+'customer_dtls/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESSEM'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };


 export const candAvail = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_avilability/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };



 export const candeditAvail = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_avilability/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };


 export const candWorkexp = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_work_reference/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 }; 

export const candeditWorkexp = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_work_reference/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 }; 

 export const candEmergencyCont = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_imregency_cont/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };

 export const candeditEmergencyCont = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_imregency_cont/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };


export const candAccountDtls = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_acount_dtls/add';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };


 export const candeditAccountDtls = async(values) => {
 	 let result = {};
	const url=''+localhost+'cand_acount_dtls/update';
	const getData= await fetch(url, {
		  "method": "POST",
		   headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
             },
		  "body": JSON.stringify(
		    values
		  )
		})
		.then(resp => resp.json())
		.then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			
            	}

            });
return result; 
 };

export const candquesDetails = async(values) => {
 	let result = {};
const url=''+localhost+'candidate_details/questiondetail?X-Api-Key='+API_KEY+'&candId='+values;
const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.health = Response.health;
	      			result.english = Response.english;
	      			result.induction = Response.induction;
	      			result.numeric = Response.numeric;
	      			result.name=Response.candName;
            	}

            });
return result; 
 };


export const candonlineExamHealth = async(values,SubID) => {

let result = {};
let url=''; 
if(SubID=='Health'){
 url=''+localhost+'cand_health_question/all?X-Api-Key='+API_KEY+'&candId='+values;
}
else if(SubID=='English'){
 url=''+localhost+'cand_english_test/all?X-Api-Key='+API_KEY+'&candId='+values;

}
else if(SubID=='Induc'){
 url=''+localhost+'cand_induction_test/all?X-Api-Key='+API_KEY+'&candId='+values;

}
else{
 url=''+localhost+'can_numeric_test/all?X-Api-Key='+API_KEY+'&candId='+values;

}

const getData= await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":API_KEY,
                
            }
            }).then(resp => resp.json())
            .then(Response => {
            	if(Response.status==false){
            		result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.'; 
	      			result.success = false;
            	}
            	else{
            		result.message = 'SUCCESS'; 
	      			result.success = true;
	      			result.data = Response.data;
	      			result.name=Response.candName
            	}

            });
return result; 
 };














 /*//////////////////////////////////////////////////////////*/


 export const getServiceDetails = async() => { 
	
  	const getData=await api.get('service_details/all').then((resp)=>{
  		return resp;
	 })
  	console.log(getData)
  	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.';
	      result.success = false;
	    } else {
	      result.message = getData.status === true 
	        ?  'SUCCESS'
	        : getData.message;
	      result.data = getData.status === true? getData.data: [];
	    }
	 	return result; 
 };

 export const getVehicleType = async() => { 
	
  	const getData=await api.get('vehicle/all').then((resp)=>{
  		return resp;
	 })
  	console.log(getData)
  	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.';
	      result.success = false;
	    } else {
	      result.message = getData.status === true 
	        ?  'SUCCESS'
	        : getData.message;
	      result.data = getData.status === true? getData.data: [];
	    }
	 	return result; 
 };

export const getVehicle = async(values) => {
	const getData=await api.get('user_vehicle/detailUser?userId='+values).then((resp)=>{
  		return resp;
	 }) 
	console.log(getData);
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.';
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	      result.message=getData.status===true?getData.message:getData.message;
	    }
	   return result; 
 };
 export const addVehicle = async(values) => {
	const getData=await api.post('user_vehicle/add',JSON.stringify(values)).then((resp)=>{
  		return resp;
	 })
	//console.log(getData);
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.';
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	      result.message=getData.status===true?getData.message:getData.message;
	    }
	   return result; 
 };
export const delVehicle = async(values) => {
	const getData=await api.post('user_vehicle/delete',JSON.stringify(values)).then((resp)=>{
  		return resp;
	 })
	console.log(getData);
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Your request could not be processed. Please try again, and if the problem persists, contact our support Team.';
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	      result.message=getData.status===true?getData.message:getData.message;
	    }
	   return result; 
 };


 



/*export const contactUsSendService = async (values = []) => {
  try {
    const getData = await request('sp_ContactUs_Add', values);
    console.log("sp_ContactUs_Add");
    let result = {};
    if (!getData || ( getData && getData.length === 0)) {
      result.message = config.NOTIFICATION_REQUEST_ERROR;
      result.success = false;
    } else {
      result.message = getData[0].ErrorCode === 0
        ? ContactusSuccess  
        : getData[0].ErrorMessage;
      result.success = getData[0].ErrorCode === 0? true: false;
    }
    return result;
  } catch (e) {
    return {
      message: e.message,
      success: false, 
    };
  }
};*/