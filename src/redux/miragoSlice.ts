import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MiragoState {
    cart: [],
    favorite: [],
    userInfo: null | []
}

const initialState: MiragoState = {
    cart: [],
    favorite: [],
    userInfo: null
}

export const miragoSlice = createSlice({
  name: 'mirago',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cart = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = miragoSlice.actions

export default miragoSlice.reducer