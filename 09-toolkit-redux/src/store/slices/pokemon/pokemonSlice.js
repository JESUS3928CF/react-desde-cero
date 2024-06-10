import { createSlice } from '@reduxjs/toolkit';

/// Estado inicial
const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false,
};

export const pokemonSlice = createSlice({
    name: 'pokemonsManagement',
    initialState,
    reducers: {

        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },

        setPokemons : (state, action) => {
            //- Cuando lo pokemons ya estén puestos poner en false
            state.isLoading = false;

            state.page = action.payload.page; //- Esperamos que en nuestro payload venga la pagina que queremos

            state.pokemons = action.payload.pokemons; //- esto también lo recibimos de nuestro thunk 
        }
    },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
