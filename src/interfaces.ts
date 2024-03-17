export interface IuserInfo {
    userid: string;
    accessToken: string;
    username: string;
  }

  export interface Option {
    id: string;
    name: string;
  }
  export interface UserInfo {
    userName : string | null,
    userid:string | null

}

export interface UserIdentityState {
    userInfo: UserInfo|null,
    userToken:string|null,
    refreshToken:string|null,
    loading:Boolean ,
    error:any,
    success:boolean,
    status:string
  }