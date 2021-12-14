import { useReducer } from 'react'
import api from '../herokuApi'

const getFuncionario = (userName) => {
    return api.get(`funcionarios/login/${userName}`)
}
export default {getFuncionario};