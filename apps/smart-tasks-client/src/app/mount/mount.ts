import { saveHeaderToken } from "../../api/api";
import { getCookies } from "@repo-hubs/smart-tasks-ui";
const token = getCookies('BTTP')

export const getHeaders = async () => {
    if(token){
        return saveHeaderToken(token)
    }
}


export const navigations = (navigate:any)=>{
    if(token){
        navigate('/home')
    }else{
        navigate('/')
    }
}