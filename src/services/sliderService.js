import { get } from "../utils/request";

export const getSlider = async () => {
    const result = await get(`slider`);
    return result;
}