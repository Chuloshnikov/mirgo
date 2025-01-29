import { createSlice } from '@reduxjs/toolkit';
import { ProductData, UserInfo } from '../../type';


interface InitialState {
    cart: ProductData[],
    wishList: ProductData[],
    userInfo: null | UserInfo
}


const initialState: InitialState = {
    cart: [],
    wishList: [],
    userInfo: null
}

export const miragoSlice = createSlice({
  name: 'mirago',
  initialState,
  reducers: {
      addToCart: (state, action) => {
        const existingProduct = state.cart.find(
          (item) => item._id === action.payload._id
        );

        if (existingProduct) {
          existingProduct.quantity += action.payload.quantity;
        } else {
          state.cart.push(action.payload);
        }
      },
      increaseQuantity: (state, action) => {
        const existingProduct = state.cart.find(
          (item) => item._id === action.payload
        );

        if (existingProduct) {
          existingProduct.quantity++;
        }
      },
      decreaseQuantity: (state, action) => {
        const existingProduct = state.cart.find(
          (item) => item._id === action.payload
        );

        if (existingProduct) {
          existingProduct.quantity--;
        }
      },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item._id !== action.payload)
      },
      resetCart: (state) => {
        state.cart = [];
      },
      addToWishList: (state, action) => {
        const existingProduct = state.wishList.find(
          (item) => item._id === action.payload
          );

          if (existingProduct) {
            return;
          } else {
            state.cart.push(action.payload);
          }
      },
      resetWishList: (state) => {
        state.wishList = [];
      },
      addUser: (state, action) => {
        state.userInfo = action.payload;
      },
      removeUser: (state) => {
        state.userInfo = null;
      }
    },
});


export const { 
  addToCart, 
  increaseQuantity, 
  decreaseQuantity, 
  removeFromCart, 
  resetCart, 
  addToWishList, 
  removeUser, 
  resetWishList, 
  addUser 
} = miragoSlice.actions;
export default miragoSlice.reducer