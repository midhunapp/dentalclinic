import {IuserInfo} from '../interfaces'
export default function authHeader(): { Authorization: string } {
    const userString:string|null = localStorage.getItem('userInfo');  
    const user: IuserInfo|null = JSON.parse(userString|| '""');
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken } ;
    } else {
      return { Authorization: 'Bearer ' } ;
    }
  }