import axios from 'axios';
import qs from 'qs';

export const axiosApiInstance = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
});

const refreshAccessToken = () =>
    axios
        .post(
            process.env.TOKEN_URL,
            qs.stringify({
                grant_type: 'client_credentials'
            }),
            {
                headers: {
                    Authorization: `Basic ${process.env.CLIENT_SECRET}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
        .then(({ data }) => data)
        .catch((error) => console.error(error));

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    (config) => {
        console.log('ENTER', config);

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

axiosApiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            console.log('401', axiosApiInstance.defaults.headers);
            const { access_token, token_type } = await refreshAccessToken();
            console.count('TOKEN UPDATED');

            axiosApiInstance.defaults.headers.common[
                'Authorization'
            ] = `${token_type} ${access_token}`;

            return axiosApiInstance(originalRequest);
        }

        return Promise.reject(error);
    }
);

export const fetcher = (url) => axiosApiInstance.get(url).then((res) => res.data);
