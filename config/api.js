import {localhost} from './localhost';
class api{
    static header(){
        return {
            'Content-Type': 'application/json', 
            "X-Api-Key":"763A3733A9D7F3939FD8B585EA6A33E6"

        };
    } 

    static headerPut(){
        return {
           'Content-Type': 'application/json', 
            "X-Api-Key":"763A3733A9D7F3939FD8B585EA6A33E6"

        };
    }
    
    static get(url){

      return this.xhr(url,'GET');
    }
    
    static post(url,params){
        var out = []; 
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                out.push(key + '=' + encodeURIComponent(params[key])); 
            }
        }
        
        const res=out.join('&');
        return this.xhr_post(url,params,'POST');
    }



    static put(url,params){
        return this.xhrPut(url,params,'PUT');
    }


    static xhr_post(url,params,type){
        
        const host=localhost; 
         url=host+url;
         console.log(params);
        return fetch(url, {
            method: type,
            headers: this.header(),
            body: params,
        }).then(resp=>{
           

           let json=resp.json();
           // 
            if(resp){
                return json;
            }
            return json.then(
                err=>{throw err;}
                );
            }).catch((error) => {
                console.log(error);
            });

    }

    static xhrPut(url,params,type){
        const host=localhost; 
       
        url=host+url;
        
        return fetch(url, {
            method: type,
            headers: this.headerPut(),
            body: params,
        }).then(resp=>{
             return resp.json().then(json => {
                return {
                   data: json,
                   status: resp.status  
                     }
                }) 
            return json.then(
                err=>{throw err;}
                );
            }).catch((error) => {
                console.log(error);
            });
    }

    static xhr(url,type){
        const host=localhost; 
        url=host+url;
        console.log(url);
        return fetch(url, {
            method: type,
            headers: this.header()
        }).then(resp=>{
            let json=resp.json();
           // 
            if(resp){
                return json;
            }
            return json.then(
                err=>{throw err;}
                );
            }).catch((error) => {
                console.log(error);
            });
    }
}
export default api; 
