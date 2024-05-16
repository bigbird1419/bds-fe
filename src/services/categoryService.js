import * as httpRequest from '../utils/httpRequest'
import { CATEGORYS } from '../constants/pathService'

export const getCategory = async (option) => {
    const rs = httpRequest.get(CATEGORYS, { params: option })
    return rs;
}

export const getCategoryById = async (id = 1) => {
    const rs = httpRequest.getById(CATEGORYS, id)
    return rs;
}

export const postCategory = async (data = {}) => {
    const rs = httpRequest.post(CATEGORYS, { data })
    return rs
}

export const putCategory = async (id, data = {}) => {
    const rs = httpRequest.post(CATEGORYS, id, { data })
    return rs
}

export const deleteCategoryById = async (id) => {
    const rs = httpRequest.deleteById(CATEGORYS, id)
    return rs
}

export const deleteCategorys = async (data) => {
    const rs = httpRequest.deletes(CATEGORYS, { data })
    return rs
}