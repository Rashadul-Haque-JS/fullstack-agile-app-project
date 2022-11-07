import { saveHeaderToken } from "../../api/api";
import { getCookies } from "@repo-hubs/smart-tasks-ui";
const token = getCookies('BTTP')

export const getHeaders = async () => {
    if(token){
        return saveHeaderToken(token)
    }
}

// * Commit to merge test

// export const RenderInCondtions = () =>{}


