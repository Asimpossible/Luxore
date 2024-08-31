/* eslint-disable react-refresh/only-export-components */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IData, IProduct } from "./types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  basket: [],
  totalPrice: 0
}

const CartSlice = createSlice({
  name: 'Basket',
  reducers: {
    addToBasket: (state: IData, action: PayloadAction<IProduct>) => {
      state.basket.push(action.payload),
        state.totalPrice = state.basket.reduce((acc, cur) => {
          return acc + Number(cur.price)
        }, 0)
    }
  },
  initialState
})

export const { addToBasket } = CartSlice.actions
const persistCart = {
  key: "Cart",
  storage: storage,
  whitelist: [
    "basket",
    "totalPrice",
  ],
}
export const productsReducer = persistReducer(persistCart, CartSlice.reducer);
export default productsReducer;