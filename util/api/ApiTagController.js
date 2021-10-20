import { ApiUri } from "./ApiConfig"

export const getAllTagsForUser = async (idUsuario, token) => {
    try {
        const response = await fetch(ApiUri + "/api/tag/" + idUsuario, {
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

export const vincularTag = async (idUsuario, codigoPin, token) => {
    try {
        const response = await fetch(ApiUri + "/api/tag/" + codigoPin, {
            method: 'PUT',
            headers: {
                'Authorization': token,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "numeroStatus": 1,
                "usuario": {
                    "idUsuario": idUsuario,
                }
            })
        })
        console.log(response.status)
        if (response.status != 200) {
            const json = await response.text();
            alert("Nenhuma tag disponivel foi encontrada.");
            return;
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const alterarStatusTag = async (codigoPin, status, token) => {
    try {
        const response = await fetch(ApiUri + "/api/tag/" + codigoPin + "/" + status, {
            method: 'PUT',
            headers: {
                'Authorization': token,
            }
        })
        if (response.status != 200) {
            const json = await response.text();
            alert("Erro ao alterar status da tag.");
            return;
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}