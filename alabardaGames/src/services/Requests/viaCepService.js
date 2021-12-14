import viaCepApi from '../viaCepApi'

const getCep = (cep) => {
    return viaCepApi.get(`${cep}/json`)
}
export default {getCep};
