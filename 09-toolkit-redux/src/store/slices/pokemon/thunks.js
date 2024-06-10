import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

/// La primera ves recibe la pagina 0
export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => { // obtener el estado de algun slice
        dispatch(startLoadingPokemons());

        try {
            const { data } = await pokemonApi.get(
                `/pokemon?limit=10&offset=${page * 10}`
            );

            /// Mandamos esos datos obtenidos a nuestro provider o slice
            dispatch(setPokemons({ pokemons: data.results, page: page }));
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
            alert(error)
        }
    };
};
