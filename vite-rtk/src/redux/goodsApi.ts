import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface Product {
    id: string;
}

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: build => ({
        getGoods: build.query({
            query: (limit = '') => `goods?${limit ? `_limit=${limit}` : ''}`,
            providesTags: (result) => result
                    ? [
                        ...result.map(({id}: Product) => ({type: 'Products' as const, id})),
                        {type: 'Products', id: 'LIST'},
                    ]
                    : [{type: 'Products', id: 'LIST'}],
        }),
        addProduct: build.mutation({
            query: (body: unknown) => ({
                url: 'goods',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        }),
        deleteProduct: build.mutation({
            query: (id: string) => ({
                url: `goods/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        })
    }),
});

export const {useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation} = goodsApi;