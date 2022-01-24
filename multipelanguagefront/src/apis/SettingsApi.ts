import {Put,Get} from './BaseApi';

interface SettingType {
    language:number;
    fieldName:string;
    fieldValue:string;
}
interface PropsType {
    settings:SettingType[]
}

export const updateSettings = async (props:any) => {
    //url for api
    const url:string = '/api/setting';
    //set headers
    const headers:HeadersInit = {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
    };

    try {
        const result = await Put(url,headers,props);
        return result;
    }catch (error:any) {
       console.log('error',error)
       throw new Error(error);
    }
};

export const getSettings = async () => {
     //url
     const url:string = `/api/setting`;
     //headers
     const headers:HeadersInit = {
         'Content-Type':'application/json',
         'Access-Control-Allow-Origin':'*',
     };
 
     try {
         const result:any = await Get(url,headers);
         return result;
     }catch(error){
         throw new Error(error as string);
     }
};
