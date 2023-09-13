import axios from "../config/axios";

async function google(event: any) {
    try {
        const credential = event.credential;
        const response = await axios.post('/auth/google', { credential });
        return response.data
    } catch (error) {
        throw error
    }
};

export default google