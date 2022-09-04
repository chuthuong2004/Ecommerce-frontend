import axios from 'axios';
import queryString from 'query-string';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

const baseURL = process.env.REACT_APP_BASE_URL;

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
const axiosClient = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${authTokens?.accessToken}`,
    },
    paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    if (!authTokens) {
        let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
        config.headers.Authorization = `Bearer ${authTokens?.accessToken}`;
    }
    const user = jwt_decode(authTokens.accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) return config;
    const response = await axios.post(`${baseURL}/auth/refresh`, {
        refresh: authTokens.refreshToken,
    });
    localStorage.setItem('authTokens', JSON.stringify(response.data));
    config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    return config;
});
axiosClient.interceptors.response.use(
    async (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (error) => {
        throw error;
    },
);
export default axiosClient;
