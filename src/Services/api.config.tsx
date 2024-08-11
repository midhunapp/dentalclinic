import axios from 'axios'
import authHeader from './auth.header'

interface Params {
headers : any
}

const postConfig: Params = {
headers: {
            //"Authorization": authHeader,
            'Content-Type': 'application/json'
         }
}

const getConfig : Params = {
    headers:  {
                //"Authorization": authHeader,
                'Content-Type': 'application/json'
              }

}

const baseUrl = "https://localhost:44329/api/";


export const getAPI = async (url: string): Promise<any> =>{
    return axios.get(baseUrl+url ,getConfig).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
   
}

export  const postAPI = async (url: string, data: any): Promise<any> =>{
    return axios.post(baseUrl+"/"+url, data,postConfig)
    .then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}