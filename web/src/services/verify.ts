import axios from "../config/axios";

async function resend(access: string) {
    try {
        const response = await axios.patch("/auth/verify", { access });
        return response.data
    } catch (error) {
        throw error
    }
}

async function checkKey(key: string) {
    try {
        const response = await axios.put(`/auth/verify/${key}`);
        return response.data
    } catch (error) {
        throw error;
    }
};

async function checkAccess(access: string) {
    try {
        const response = await axios.get(`/auth/verify`, { headers: { Authorization: access } });
        return response.data
    } catch (error) {
        throw error;
    }
}

async function verify(code: string, access: string) {
    try {
        const response = await axios.post("/auth/verify", { code, access });
        return response.data;
    } catch (error) {
        throw error
    }
}

export { resend, verify, checkKey, checkAccess }