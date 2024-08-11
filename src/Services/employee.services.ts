
import {getAPI,postAPI} from './api.config' // import the api helper 

const addEmployee = async(): Promise<any> => {
 
  return await getAPI("Common/Nationalities");
};

const sharedService = {
  addEmployee
  };
  
  export default sharedService;