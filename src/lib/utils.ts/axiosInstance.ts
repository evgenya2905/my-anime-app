import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.jikan.moe/v4/'
})

export const axiosGet = (url: string) => {
    return axiosInstance.get(url)
}