import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  inputText: "",
  suggetions: [],
  loading: false,
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