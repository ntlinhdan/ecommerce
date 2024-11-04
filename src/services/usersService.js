import { get, post } from "../utils/request";
//get api login
export const login = async (email, password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
}
// api register
export const register = async (options) => {
    const result = await post(`users`, options);
    return result;
}
//Api đã tồn tại hay chưa
export const checkExits = async (key, value) => {
    const result = await get(`users?${key}=${value}`);
    return result;
}
