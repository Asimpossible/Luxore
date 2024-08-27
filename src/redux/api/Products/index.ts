import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${import.meta.env.VITE_BASE_URL}`

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getProducts: builder.query<void, void>({
            query() {
                return {
                    url: 'products',
                    method: 'GET'
                }
            }
        })
    })
})

export const { useGetProductsQuery } = productsApi;
