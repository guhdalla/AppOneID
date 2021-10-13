import { ApiUri } from "../../../ApiConfig"

export const createUsuarioJuridico = async (primeiroNome, sobrenome, dataNascimento, email, telefone, senha, cnpj, entranceID, authenticateID, nomeFantasia, razaoSocial, bairro, cep, cidade, complemento, numero, rua, uf) => {
    try {
        console.log(authenticateID);
        console.log(entranceID);
        const response = await fetch(ApiUri + "/api/usuario/juridico", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cnpj": cnpj,
                "dataNascimento": dataNascimento,
                "email": email,
                "entranceID": entranceID,
                "authenticateID": authenticateID,
                "fotoPerfil": "string",
                "nomeFantasia": nomeFantasia,
                "primeiroNome": primeiroNome,
                "razaoSocial": razaoSocial,
                "senha": senha,
                "sobrenome": sobrenome,
                "telefone": telefone,
                "tokenApi": "sing",
                "endereco": {
                    "bairro": bairro,
                    "cep": cep,
                    "cidade": cidade,
                    "complemento": complemento,
                    "numero": numero,
                    "rua": rua,
                    "uf": uf
                }
            })
        })
        const json = await response.text();
        console.log(response.status);
        console.log(json)
    } catch (error) {
        console.error(error);
    }
}