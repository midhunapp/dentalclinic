import { createSlice } from '@reduxjs/toolkit'
import {login} from './authActions'

const initialState:UserIdentityState ={
    userInfo:undefined,
    userToken:undefined,
    loading:false,
    error:undefined,
    success:false,
    status:""
  }
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
      builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.loading=false
        //state.posts = state.posts.concat(action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
        state.loading=false
      })
  
    }
  })
  
  export default authSlice.reducer
    