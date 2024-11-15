import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jokAPI = createApi({
    reducerPath:"joks",
    baseQuery:fetchBaseQuery({baseUrl:'https://v2.jokeapi.dev/joke/Any'}),
    endpoints:(builder) => ({
        getJoks: builder.query({
            query: (lang) => (`?lang=${lang}&amount=10`)
        })
    }),
    
    
})


export const {useGetJoksQuery} = jokAPI

