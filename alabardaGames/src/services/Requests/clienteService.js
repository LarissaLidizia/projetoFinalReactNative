import herokuApi from '../herokuApi';

const getCliente = () => {
    return herokuApi.get(`clientes`)
}

const getClienteId = (id) => {
    return herokuApi.get(`clientes/${id}`)
}

const deleteClienteId = (id) => {
    return herokuApi.delete(`clientes/${id}`)
}

const postCliente = () => {
    return herokuApi.post(`clientes`)
}

const putClienteId = (id) => {
    return herokuApi.put(`clientes/${id}`)
} 

export default {getCliente, getClienteId, deleteClienteId, postCliente, putClienteId};