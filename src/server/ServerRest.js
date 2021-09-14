import http from "../http-rest"

//Lista todas as publicações
const getAllPublicacoes = () => {
    return http.get("publicacoes");
};

//Procurar Publicação pelo id
const getPublicacao = id => {
    return http.get(`/publicacoes/${id}`);
};

//Criar Publicação
const createPublicacao = data => {
    return http.post("/publicacoes/criar", data);
};

//Atualizar Publicação
const updatePublicacao = (id, data) => {
    return http.put(`/publicacoes/atualizar`, data);
};
//Remover Publicação
const removePublicacao = id => {
    return http.delete(`/publicacoes/delete/${id}`);
};

//Lista todos os Usuarios
const getAllUsuarios = () => {
    return http.get("/usuarios");
};

//Procurar Usuario pelo id
const getUsuarios = id => {
    return http.get(`/usuarios/${id}`);
};

//Criar Usuario
const createUsuarios = data => {
    return http.post("/usuarios/criar", data);
};

//Atualizar Usuario
const updateUsuarios = (id, data) => {
    return http.put(`/usuarios/atualizar/${id}`, data);
};
//Remover Usuario
const removeUsuarios = id => {
    return http.delete(`/usuarios/${id}`);
};
//Lista todos os tipos de lixos
const getAllLixos = () => {
    return http.get("/tipo");
};

//Procurar tipo de lixo pelo id
const getLixo = id => {
    return http.get(`/tipo/${id}`);
};
//Procurar todos os interessados de todas as publicações
const getAllInteressados = () =>{
    return http.get("/interessados")
}

//Procurar Interessados da publicação 
const getInteressado = id => {
    return http.get(`/interessados/${id}`)
}

//Postar Interesse na publicação
const createInteressado = dados =>{
    return http.post(`/interessados/criar/`, dados)
}
//Procurar Interesses do usuario
const getUsuarioInteressado = id =>{
    return http.get(`/interessados/usuario/${id}`)
}
//Deletar Interessado
const deleteInteressado = id =>{
    return http.delete(`/interessados/delete/${id}`)
}
export default {
    getAllPublicacoes,
    getPublicacao,
    createPublicacao,
    updatePublicacao,
    removePublicacao,
    getAllUsuarios,
    getUsuarios,
    createUsuarios,
    updateUsuarios,
    removeUsuarios,
    getLixo,
    getAllLixos,
    getInteressado,
    getAllInteressados,
    createInteressado,
    getUsuarioInteressado,
    deleteInteressado

};