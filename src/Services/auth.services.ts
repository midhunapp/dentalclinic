import axios from "axios";
import authHeader from './auth.header'
import {getAPI,postAPI} from './api.config' // import the api helper 

const API_URL = "https://localhost:44329/api/Auth/";


const getRoles = async(): Promise<any> => {
  return await getAPI("Auth/getRoles");
};
//--------------------------------------------

const register = (username:string, email:string, password:string) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = async (username:string, password:string,usertype:string): Promise<any> => {
  try {
    const response =await postAPI("Auth/login", {
      username:username,
      password:password,
      userRole:usertype
  });

    const json = await response.data;
    console.log(json);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};


const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
  getRoles
};

export default authService;
