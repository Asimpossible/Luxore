import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IProduct } from "./types";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState: IData = {
  basket: [],
  totalPrice: 0
}

const CartSlice = createSlice({
  name: 'Cart',
  reducers: {
    addToBasket: (state: IData, action: PayloadAction<IProduct>) => {
      state.basket.push(action.payload)
      state.totalPrice = state.basket.reduce((acc, cur) => {
        return acc + Number(cur.price)
      }, 0)
    }
  },
  initialState

})

export const { addToBasket } = CartSlice.actions

export const productsReducer = persistReducer(
  {
    key: 'Cart',
    storage,
    whitelist: [
      'basket',
      'totalPrice'
    ]
  }, CartSlice.reducer)
export default productsReducer;