import { productsApi } from "./api/Products";
import productsReducer from "./features/Cart/CartSlice";

export const reducer = {
    reducer: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer
}

export const middlewares = [
    productsApi.middleware
]