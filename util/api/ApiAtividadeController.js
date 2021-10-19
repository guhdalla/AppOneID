import { ApiUri } from "./ApiConfig"

export const getAtividade = async (token) => {
    try {

        const response = await fetch(ApiUri + "/api/atividade", {
            headers: {
                'Authorization': token,
            },
        })
        const json = await response.json();
        return json;
        
    } catch (error) {
        console.error(error);
    }
}