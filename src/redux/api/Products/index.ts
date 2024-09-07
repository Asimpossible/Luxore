import { IProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${import.meta.env.VITE_BASE_URL}`

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], number | void>({
            query(limit) {
                return {
                    url: 'products',
                    method: 'GET',
                    params: limit ? { limit } : {}
                }
            }
        }),
        getProductById: builder.query<IProduct, number>({
            query(id) {
                return {
                    url: `products/${id}`,
                    method: "GET"
                }
            }
        }),
        getCategoryData: builder.query<IProduct[], string>({
            query(categoryName) {
                return {
                    url: `products/category/${categoryName}`,
                    method: 'GET'
                }
            }
        })
    })
})

export const { useGetProductsQuery, useGetCategoryDataQuery, useGetProductByIdQuery } = productsApi;
