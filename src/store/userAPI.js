import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { filterCharacters, filterDeaths, filterEpisodes, filterQuotes } from '../helpers/filters'


export const userAPI = createApi({
    // reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://breakingbadapi.com/api/' }),
    endpoints: (builder) => ({
        fetchCards: builder.query( {
            query: ({option}) => `${option}`,
            transformResponse: (data,_,arg) => {
                const { option, input } = arg
                if(option === 'characters') return filterCharacters(data,input)
                if(option === 'deaths') return filterDeaths(data,input)
                if(option === 'quotes') return filterQuotes(data,input)
                if(option === 'episodes') return filterEpisodes(data,input)
            }
        } )
    })
})

export const { useFetchCardsQuery } = userAPI


