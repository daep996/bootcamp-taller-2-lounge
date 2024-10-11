import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    idProducto: 0,
    detalleProducto: []
}

export const dataSlice = createSlice({
    name: 'dataFetch',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setId: (state, action) => {
            state.idProducto = action.payload
        },
        getDetalleProducto: (state) => {
            state.detalleProducto = state.data.find((item) => item.id === state.idProducto);
        }
    },
})

export const { setData, setId, getDetalleProducto } = dataSlice.actions

export default dataSlice.reducer
