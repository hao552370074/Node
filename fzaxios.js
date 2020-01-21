import axios from 'axios'
const qs = require('qs');

export const api = {
    async get(url, data) {
        try {
            let res = await axios.get(url, { params: data });
            res = res;
            return new Promise((resolve, reject) => {
                if (res.Code > 0) {
                    resolve(res)
                } else {
                    resolve(res)
                }
            })
        } catch (error) {
            console.log(error);
        }
    },
    async post(url, data) {
        try {
            let res = await axios.post(url, qs.stringify(data));
            res = res;
            return new Promise((resolve, reject) => {
                if (res.Code > 0) {
                    resolve(res)
                } else {
                    resolve(res)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}