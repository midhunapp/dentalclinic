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
    userInfo?: UserInfo,
    userToken?:string,
    loading:Boolean ,
    error?:string ,
    success:boolean,
    status:string
  }