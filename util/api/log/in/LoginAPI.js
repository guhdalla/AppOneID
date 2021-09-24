import { ApiUri } from "../../../ApiConfig";

export const login = async (email, senha) => {
    try {
        const response = await fetch(ApiUri + "/api/log/in", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "senha": senha
            })
        })
        console.log(response.status);
        if (response.status != 200) {
            const json = await response.text();
            return;
        } 
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}