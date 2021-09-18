import axios from 'axios';
import qs from 'qs';

export const axiosApiInstance = axios.create({});

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
        .catch((error) => console.error('Authorization Error:', error));

axiosApiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const { access_token, token_type } = await refreshAccessToken();

            axiosApiInstance.defaults.headers.common[
                'Authorization'
            ] = `${token_type} ${access_token}`;

            return axiosApiInstance(originalRequest);
        }

        return Promise.reject(error);
    }
);
