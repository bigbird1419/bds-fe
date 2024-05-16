import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    console.log('option: ', option)
    const rs = await httpRequest.get(path, option);
    return rs.data;
};

export const getById = async (path, id = 1) => {
    const rs = await httpRequest.get(`${path}/${id}`)
    return rs.data
}

export const post = async (path, data) => {
    const rs = await httpRequest.post(path, data)
    return rs.data
}

export const put = async (path, id, data) => {
    const rs = await httpRequest.put(`${path}/${id}`, data)
    return rs.data
}

export const deleteById = async (path, id) => {
    const rs = await httpRequest.delete(`${path}/${id}`, id)
    return rs.data
}

export const deletes = async (path, data) => {
    const rs = await httpRequest.delete(path, data)
    return rs.data
}

export default httpRequest;
