import { ApiUri } from "./ApiConfig"

export const alterarStatusDispositivo = async (codigoPin, status, token) => {
    try {
        const response = await fetch(ApiUri + "/api/dispositivo/" + codigoPin + "/" + status, {
            method: 'PUT',
            headers: {
                'Authorization': token,
            }
        })
        if (response.status != 200) {
            const json = await response.text();
            alert("Erro ao alterar status do dispositivo.");
            return;
        }
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const vincularDispositivo = async (codigoPin, token) => {
    try {
        const response = await fetch(ApiUri + "/api/dispositivo/" + codigoPin, {
            method: 'PUT',
            headers: {
                'Authorization': token,
            },
        })
        console.log(response.status)
        if (response.status != 200) {
            const json = await response.text();
            alert("Nenhum dispositivo disponivel foi encontrada.");
            return;
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}