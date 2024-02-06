import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../Services/auth.services";
type loginData = {username: string; password: string,usertype:string }
export const login = createAsyncThunk(
    "auth/login",
    async (user:loginData, thunkAPI) => {
      try {
        const data = {name:"Midhuna",username:"midhunapp"};//await AuthService.login(arg.username, arg.password,arg.usertype);
        return { user: data };
      } catch (error:any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      //  thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue({});
      }
    }
  );
  
