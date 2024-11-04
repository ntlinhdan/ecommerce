import { get } from "../utils/request";

export const getAllProduct = async () => {
    const result = await get(`productItems`);
    return result;
}