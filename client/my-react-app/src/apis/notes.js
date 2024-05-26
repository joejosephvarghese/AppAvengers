import CONFIGS from "../config"
import axios from "axios"

export const instance = axios.create({
    baseURL: `${CONFIGS.BASE_URL}/api`
})



export const fetchNotes = async () => {
    const {data} = await instance.get('/notes');
    return data
}


export const saveNote = async (payload) => await instance.post(`/notes/create-note`, payload);

export const  updateNoteAPI = async (payload) => await instance.put(`/notes/update-note/${payload.id}`,{
  
    content: payload.content
  
    // Add other properties if needed
  });
  export const  deleteNoteAPI = async (payload) => await instance.delete(`/notes/delete-note/${payload.id}`);