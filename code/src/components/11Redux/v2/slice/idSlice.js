import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

export const idSlice = createSlice({
    name:"id",
    initialState,
    reducers: {}
})

export default idSlice.reducer