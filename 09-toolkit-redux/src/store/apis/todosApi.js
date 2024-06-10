
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
        }),
        /// Asi definimos otro endpoint, 
        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`, //- De esta forma resivimos parametros
        }),
    }),
});

//- Automaticamente de crea su custom hook es el nombre con useNonbreEnpointQuery, y lo hacemos disponible
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;