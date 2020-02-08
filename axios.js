import axios from "axios";
// import { get } from "http";
var qs = require("qs");

axios.defaults.baseURL = "http";

axios.interceptors.request.use(fonfig => {
  if (localStorage.getItem("token")) {
    config.headers.token = localStorage.getItem("token");
  } else {
    return fonfig;
  }
});
axios.interceptors.response.use(res => {
  if (res.status == 200) {
    let data = res.data;
  } else {
    return res;
  }
});

const api = {
  async get(url, data) {
    try {
      let res = await axios.get(url, { params: data });
      res = res;
      return new Promise((resolve, reject) => {
        if (res.Code > 0) {
          resolve(res);
        } else {
          resolve(res);
        }
      });
    } catch (error) {
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
};
