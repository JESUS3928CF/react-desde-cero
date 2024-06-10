
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { todosApi } from './apis';

export const store = configureStore({
    reducer: {
        counter : counterSlice.reducer, 
        pokemon : pokemonSlice.reducer,

        /// Este va a ser el espacio donde voy a estar colocando el resultado de esas consultas http
        [todosApi.reducerPath] : todosApi.reducer,
    },

    //- Un middleware es una funcion que se ejecuta antes que otra
    /// 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( todosApi.middleware )
});