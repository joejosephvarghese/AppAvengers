import {createSlice} from '@reduxjs/toolkit'


const noteSlice=createSlice({
 name:"note",
 initialState:{
    loading:false,
    data:[],
    error:null

 },

 reducers:{
    setNotes :(state,action)=>{
       state.data=action.payload
    },
    getNote:(state)=>{
        return state.data
    },
    updateNote: (state, action) => {
        const index = state.data.findIndex((note) => note.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
    
 }
})


export default  noteSlice.reducer
export const { setNotes, addNote, updateNote, setError, setLoading } = noteSlice.actions;