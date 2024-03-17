import axios from "axios";
import authHeader from './auth.header'

const API_URL = "https://localhost:44329/api/Auth/";


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

const login = async (username:string, password:string,usertype:string): Promise<void> => {
  try {
    const response = await axios.post(API_URL + "login", {
        username:username,
        password:password,
        userRole:usertype
    });

    const json = await response.data;
    console.log(json);
    console.warn(response.data);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

const login1 = (username:string, password:string,usertype:string) => {
  alert("reached service--"+username+"--"+password+"--"+usertype)
  return axios
    .post(API_URL + "login", {
      username:username,
      password:password,
      userRole:usertype
    })
    .then((response) => {
      alert(JSON.stringify(response))
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
