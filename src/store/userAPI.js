import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAPI = createApi({
    // reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://breakingbadapi.com/api/' }),
    endpoints: (builder) => ({
        fetchCards: builder.query( {
            query: (limit) => `${limit}`,
            // transformResponse: (data) => {
            //     // console.log("DATA",data)
                
            //     return {
            //         data
            //     }
            // }
        } )
    })
})

export const { useFetchCardsQuery } = userAPI


