import axios from 'axios'
// import { get } from 'http';
const qs=require('qs');


axios.header.baseURL='http://'

axios.interceptor.request.use(config=>{
    if (localStorage.getItem('Token')) {
        config.headers.token=localStorage.getItem('token')
    }
    return config;
})

axios.interceptor.response.use(res=>{
    if (res.status==200) {
        
    }
})

export const api={
    async get(url,data){
        try{
            let res=await axios.get(url,{params:data});
            res=res;
            return new Promise((resolve,reject)=>{
                if (res.Code>0) {
                    resolve(res)
                }else{
                    resolve(res)
                }
            })
        }catch(error){
            console.log(error);
        }
    },
    async post(url,data){
        try{
            let res=await axios.post(url,qs.stringify(data));
            res=res;
            return new Promise((resolve,reject)=>{
                if (res.Code>0) {
                    resolve(res)
                }else{
                    resolve(res)
                }
            })
        }catch(error){
            console.log(error);
        }
    }
}
