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
    }
 }
})


export default  noteSlice.reducer
export const {setNotes,getNote}=noteSlice.actions