import { ApiUri } from "./ApiConfig"

export const createUsuarioFisico = async (primeiroNome, sobrenome, dataNascimento, email, telefone, senha, cpf) => {
    try {
        const response = await fetch(ApiUri + "/api/usuario/fisico", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "primeiroNome": primeiroNome,
                "sobrenome": sobrenome,
                "dataNascimento": dataNascimento,
                "email": email,
                "telefone": telefone,
                "password": senha,
                "cpf": cpf,
            })
        })
        const json = await response.text();
        console.log(response.status);
        console.log(json)
    } catch (error) {
        console.error(error);
    }
}