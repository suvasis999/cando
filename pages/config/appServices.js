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