import { ApiUri } from "../../ApiConfig"

export const alterarSaldo = async (id, valor) => {
    try {
        const response = await fetch(ApiUri + "/api/carteira/" + id + "/" + valor, {
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