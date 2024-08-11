import {IuserInfo} from '../interfaces'
export default function authHeader(): string {
    const userString:string|null = localStorage.getItem('userInfo');  
    const user: IuserInfo|null = JSON.parse(userString|| '""');
    if (user && user.accessToken) {
      return 'Bearer ' + user.accessToken ;
    } else {
      return 'Bearer ' ;
    }
  }