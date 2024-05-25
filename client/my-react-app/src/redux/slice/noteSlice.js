import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },

  reducers: {
    setNotes: (state, action) => {
      state.data = action.payload;
    },
    getNote: (state) => {
      return state.data;
    },
    updateNote: (state, action) => {
      state.data = state.data.map((note) => {
        if (note._id === action.payload?._id) {
          note = {
            ...action.payload,
          };
        }
        return note;
      });
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { setNotes, addNote, updateNote, setError, setLoading } =
  noteSlice.actions;
