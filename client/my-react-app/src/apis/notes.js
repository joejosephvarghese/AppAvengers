import CONFIGS from "../config"
import axios from "axios"

export const instance = axios.create({
    baseURL: `${CONFIGS.BASE_URL}/api`
})



export const fetchNotes = async () => {
    const {data} = await instance.get('/notes');
    return data
}


export const saveNote = async (payload) => await instance.post(`/notes`, payload);

