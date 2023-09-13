import axios from "../config/axios";

async function register(username: string, email: string, password: string) {
    try {
        const response = await axios.post("/auth/register", { username, email, password });
        return response.data
    } catch (error) {
        throw error
    }
}

async function check(username: string) {
    try {
        const response = await axios.get(`/auth/register/${username}`);
        return response.data
    } catch (error) {
        throw error
    }
};

export { register, check }