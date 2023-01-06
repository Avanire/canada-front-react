import {API_URL} from "./constans";

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

const getRequest = (url: RequestInfo | URL, option: RequestInit = {}) => {
    return fetch(url, option).then(res => checkResponse(res));
}

export const getSettingByName = (name: string) => {
    return getRequest(`${API_URL}/settings/${name}`);
}

export const getArticles = () => {
    return getRequest(`${API_URL}/articles`);
}

export const getMenu = (name: string) => {
    return getRequest(`${API_URL}/menu/${name}`);
}