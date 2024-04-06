import axios from 'axios';
import ApiHandler from './index';

export const postdomain = async (newData) => {
    console.log(newData);

    try {
        const apiUrl = `${ApiHandler}/domain`;
        const postData = newData;
    
        const response = await axios.post(apiUrl, postData);
        if(response.data.error === false){
            // await getAllCategories()
        }else{
            
            // alert("Successfully added salesman");
        }

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error);
            console.error('Axios Config:', error);
        } else {
            console.error('Error during post request:', error);
        }
        throw error;
    }
};

export const getDomain = async (data) => {
    try {
        const apiUrl = `${ApiHandler}/livesubdomains`;
        
        const headers = {
            Authorization: "token",
            'Content-Type': 'application/json',
        };

        
        const response = await axios.post(apiUrl, data, {
            headers: headers
        });

        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error;
            console.error('Axios Error:', axiosError.code, axiosError.message);
            console.error('Axios Config:', axiosError.config);
        } else {
            console.error('Error during login:', error);
        }
        throw error;
    }
    };