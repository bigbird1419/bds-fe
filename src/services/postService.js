import * as httpRequest from '../utils/httpRequest'
import { POSTS } from '../constants/pathService'

export const getPosts = async (option = {}) => {
    const rs = httpRequest.get(POSTS, option)
    return rs
}

export const getPostById = async (id) => {
    const rs = httpRequest.getById(POSTS, id)
    return rs
}