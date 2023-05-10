import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const idSlice = createSlice({
    name:"id",
    initialState,
    reducers: {
        Incrementar: (state) => {
            state.value += 1
        },
        Decrementar: (state) => {
            state.value === 0 ? state.value = 0 : state.value -= 1
        },
        IncrementarValor: (state, action) => {
            state.value += action.payload
        }
    }
})
export const { Incrementar, Decrementar } = idSlice.actions
export default idSlice.reducer