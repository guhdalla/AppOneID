import { ApiUri } from "./ApiConfig";

export const findByToken = async (token) => {
    try {
        const response = await fetch(ApiUri + "/api/log/info", {
            headers: {
                'Authorization': token, 
            },
        })
        console.log(response.status)
        if (response.status != 200) {
            return;
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}