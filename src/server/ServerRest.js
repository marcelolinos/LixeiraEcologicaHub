import http from "../server/ServerRest"

//Lista todas as publicações
const getAllPublicacoes = () => {
    return http.get("/publicacoes");
};

//Procurar Publicação pelo id
const getPublicacao = id => {
    return http.get(`/publicacoes/${id}`);
};

//Criar Publicação
const createPublicacao = data => {
    return http.post("/publicacoes", data);
};

//Atualizar Publicação
const updatePublicacao = (id, data) => {
    return http.put(`/publicacoes/${id}`, data);
};
//Remover Publicação
const removePublicacao = id => {
    return http.delete(`/publicacoes/${id}`);
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
    return http.post("/usuarios", data);
};

//Atualizar Usuario
const updateUsuarios = (id, data) => {
    return http.put(`/usuarios/${id}`, data);
};
//Remover Usuario
const removeUsuarios = id => {
    return http.delete(`/usuarios/${id}`);
};

  
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
};