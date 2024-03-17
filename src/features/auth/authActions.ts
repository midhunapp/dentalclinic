import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../Services/auth.services";
type loginData = {username: string; password: string,usertype:string }
export const login=  createAsyncThunk(
    "auth/login",
    async (user:loginData, thunkAPI) => {
      try {
        const data = await AuthService.login(user.username, user.password,user.usertype);
       // alert(JSON.stringify(data));
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
  
