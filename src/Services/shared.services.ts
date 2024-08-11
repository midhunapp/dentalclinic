
import {getAPI,postAPI} from './api.config' // import the api helper 




const getNationality = async(): Promise<any> => {
 
  return await getAPI("Common/Nationalities");
};

const getUserTypes = async(): Promise<any> => {
 
  return await getAPI("Common/user-types");
};

const sharedService = {
    getNationality,
    getUserTypes
  };
  
  export default sharedService;