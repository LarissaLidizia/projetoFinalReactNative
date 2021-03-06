import herokuApi from '../herokuApi';

const getCliente = () => {
    return herokuApi.get(`clientes`)
}

const getClienteId = (id) => {
    return herokuApi.get(`clientes/${id}`)
}

const deleteCliente = (id) => {
    return herokuApi.delete(`clientes/${id}`)
}

const postCliente = (clientes) => {
    return herokuApi.post(`clientes`, clientes)
}

const putClienteId = (id, clientes) => {
    return herokuApi.put(`clientes/${id}`, clientes)
} 

export default {getCliente, getClienteId, deleteCliente, postCliente, putClienteId};