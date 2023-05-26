import axios from 'axios';

const apiUrl = "https://internship-service.onrender.com/videos?";

export const fetchData = async (url) => {
    const {data} = await axios.get(`${apiUrl}${url}`);
    return data;
}