import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),

    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Task'],
            transformResponse: (response) => response.reverse(),
        }),

        createTask: builder.mutation({
            query: (newTask) => ({
                url: '/tasks',
                method: 'POST',
                body: newTask,
            }),
            invalidatesTags: ['Task'],
        }),
        /*/// Mutación para editar  */
        updateTask: builder.mutation({
            query: (updatedTask) => ({
                url: `/tasks/${updatedTask.id}`,
                method: 'PATCH',
                body: updatedTask,
            }),
            //! Esto dice que si yo creo algo en el back se ejecuta de nuevo task
            invalidatesTags: ['Task'],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task'],
        }),
    }),
});

/*/// usamos el hook para agregar datos  */
export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = apiSlice;
