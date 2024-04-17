import { createSlice ,PayloadAction } from '@reduxjs/toolkit'
import {login} from './authActions'
import {UserIdentityState} from '../../interfaces'
import { UserInfo } from '../../interfaces';

  // initialize userToken from local storage
const userTokenData: string | null = localStorage.getItem('userToken')
? localStorage.getItem('userToken')
: null;

const refreshTokenData: string | null = localStorage.getItem('refreshToken')
? localStorage.getItem('refreshToken')
: null;

const initialState:UserIdentityState ={
  userInfo:null,
  userToken:userTokenData,
  refreshToken:refreshTokenData,
  loading:false,
  error:"",
  success:false,
  status:""
}
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        localStorage.removeItem('userToken'); // delete token from storage
        localStorage.removeItem('refreshToken'); // delete token from storage
        localStorage.removeItem('userid'); // delete token from storage
        localStorage.removeItem('userName'); // delete token from storage
        state.loading = false;
        state.userInfo = null;
        state.userToken = null;
        state.error = null;
      },
      setCredentials: (state, action: PayloadAction<any>) => {
        state.userInfo = action.payload;
      },
    },
    extraReducers:(builder)=>{
      builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        alert("login succeeded")
        //alert(JSON.stringify(action.payload.user.token))
        //alert(JSON.stringify(action.payload.user.refreshToken))
       // alert(JSON.stringify(action.payload.user.userId))
       // alert(JSON.stringify(action.payload.user.userName))
        state.status = "succeeded"
        state.loading=false
        state.userToken=action.payload.user.token;       
        state.refreshToken=action.payload.user.refreshToken;    
        state.userInfo={
          userid:action.payload.user.userId,
          userName:action.payload.user.userName
        };
        localStorage.setItem("userToken", JSON.stringify(action.payload.user.token));
        localStorage.setItem("refreshToken", JSON.stringify(action.payload.user.refreshToken));
        localStorage.setItem("userid", JSON.stringify(action.payload.user.userId));
        localStorage.setItem("userName", JSON.stringify(action.payload.user.userName));
        //state.posts = state.posts.concat(action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        alert("login failed")
        state.status = "failed"
        state.error = action.error.message
        state.loading=false
      })
  
    }
  })
  export const { logout, setCredentials } = authSlice.actions
  export default authSlice.reducer