/* eslint-disable react-refresh/only-export-components */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IData, IFavorites, IProduct } from "@/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  basket: [],
  favorites: [],
  totalPrice: 0,
}

const CartSlice = createSlice({
  name: 'Basket',
  reducers: {
    addToBasket: (state: IData, action: PayloadAction<IProduct>) => {
      const existingProduct = state.basket.find(item => item.id === action.payload.id)
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
        state.totalPrice = state.basket.reduce((acc, cur) => {
          return acc + (Number(cur.price) * cur.quantity)
        }, 0)
      }
      else {
        state.basket.push({ ...action.payload, quantity: action.payload.quantity })
        state.totalPrice = state.basket.reduce((acc, cur) => {
          return acc + (Number(cur.price) * cur.quantity)
        }, 0)
      }
    },
    removeFromBasket: (state: IData, action: PayloadAction<number>) => {
      state.basket = state.basket.filter(item => item.id !== action.payload)
      state.totalPrice = state.basket.reduce((acc, cur) => {
        return acc + (Number(cur.price) * cur.quantity)
      }, 0)
    },
    getTotalPrice: (state: IData) => {
      state.totalPrice = state.basket.reduce((acc, cur) => {
        return acc + (Number(cur.price) * cur.quantity)
      }, 0)
    },
    clearBasket: (state) => {
      state.basket = initialState.basket
      state.totalPrice = initialState.totalPrice
    },
    addToFavorites: (state: IFavorites, action: PayloadAction<IProduct>) => {
      const isAlreadyFavorited = state.favorites.some(item => item.id === action.payload.id);
      if (!isAlreadyFavorited) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state: IFavorites, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((product) => product.id !== action.payload)
    },
    clearFavorites: (state) => {
      state.favorites = []
    }
  },
  initialState
})

export const { addToBasket, removeFromBasket, clearBasket, getTotalPrice, addToFavorites, removeFromFavorites, clearFavorites } = CartSlice.actions
const persistCart = {
  key: "Cart",
  storage: storage,
  whitelist: [
    "basket",
    "favorites",
    "totalPrice",
  ],
}
export const productsReducer = persistReducer(persistCart, CartSlice.reducer);
export default productsReducer;