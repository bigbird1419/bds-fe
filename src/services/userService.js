import * as httpRequest from '../utils/httpRequest'
import { AUTH } from '../constants/pathService'

export const signUp = async (data) => {
    console.log(data)
    const rs = httpRequest.post(`${AUTH}/signup`, data)
    return rs
}

export const signIn = async (data) => {
    const rs = httpRequest.post(`${AUTH}/signin`, data)
    return rs
}