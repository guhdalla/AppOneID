import { ApiUri } from "./ApiConfig";

export const login = async (email, senha) => {
    try {
        const response = await fetch(ApiUri + "/api/log/in", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": email,
                "password": senha
            })
        })
        if (response.status != 200) {
            return;
        } 
        const json = await response.text();
        return json;
    } catch (error) {
        console.error(error);
    }
}