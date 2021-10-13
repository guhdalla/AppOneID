import { ApiUri } from "../../ApiConfig"

export const getAllTagsForUser = async (idUsuario) => {
    try {
        const response = await fetch(ApiUri + "/api/tag/" + idUsuario)
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const vincularTag = async (idUsuario, codigoPin) => {
    try {
        console.log(idUsuario)
        const response = await fetch(ApiUri + "/api/tag/" +  codigoPin, {
            method: 'PUT',
            headers: {
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

export const alterarStatusTag = async (codigoPin, status) => {
    try {
        const response = await fetch(ApiUri + "/api/tag/" +  codigoPin + "/" + status, {
            method: 'PUT'
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