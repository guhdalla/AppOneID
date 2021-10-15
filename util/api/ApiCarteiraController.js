import { ApiUri } from "./ApiConfig"

export const alterarSaldo = async (id, valor, token) => {

    try {
        const response = await fetch(ApiUri + "/api/carteira/" + id + "/" + valor, {
            method: 'PUT',
            headers: {
                'Authorization': token,
            }
        })
        if (response.status != 200) {
            alert("Erro ao adicionar saldo na carteira!");
            return null;
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}