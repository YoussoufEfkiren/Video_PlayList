import { createSlice } from '@reduxjs/toolkit';

const initialState = []; 

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
