
interface UserInfo {
    userName : string | null,
    userid:string | null

}

interface UserIdentityState {
    userInfo?: UserInfo,
    userToken?:string,
    loading:Boolean ,
    error?:string ,
    success:boolean,
    status:string
  }
  