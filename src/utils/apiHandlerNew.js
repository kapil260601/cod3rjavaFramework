import axios,{AxiosError} from 'axios';

const ApiHandler ="http://192.168.29.57:8080";

export const axiosGet =  async (endpoint)=> {
    try {
        const apiUrl = `${ApiHandler+endpoint}`;
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error in GET request:', error);
        throw error;
    }
}

export const axiosPost = async function post(endpoint, data,) {
    try {
        const apiUrl = `${ApiHandler+endpoint}`;

        const response = await axios.post(apiUrl, data);
        return response.data;
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}


