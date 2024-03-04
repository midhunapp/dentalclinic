import axios from "axios";
import authHeader from './auth.header'

const API_URL = "https://localhost:44329/api/Auth/";

const getRoles1 = async(): Promise<any> => {
  return axios.get(API_URL + "getRoles", { headers: authHeader() });
};

const getRoles = async(): Promise<any> => {
  return axios.get(API_URL + "getRoles");
};
//--------------------------------------------

const register = (username:string, email:string, password:string) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username:string, password:string,usertype:string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
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
