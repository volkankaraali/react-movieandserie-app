import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  inputText: "",
}

export const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    setInputText: (state, action) => { state.inputText = action.payload },
  }
})

export const { setInputText } = searchbarSlice.actions;

export default searchbarSlice.reducer;