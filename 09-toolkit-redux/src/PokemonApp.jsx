import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
    const { pokemons, page, isLoading } = useSelector((state) => state.pokemon); //* este nombre sale de lo que lo pusimos en el stor
    const dispatch = useDispatch();

    // Se ejecuta 2 veces por el modo estricto
    useEffect(() => {
        /// Acción que queremos disparar
        dispatch(getPokemons());
    }, []);


    ///1) Funcion para ejecutar nuestro thunk 
    const handleLoadMore = (isLess = false) => {
        // Despachar la acción para obtener más Pokémon en la página actual
        // Validar si es menos para evitar números negativos en la página
        const pageSend = isLess ? Math.max(page - 1, 0) : page + 1;
        dispatch(getPokemons(pageSend));
    };

    return (
        <>
            <h1>Pokemon app</h1>
            <hr />
            <span> Loading: {isLoading ? 'True' : 'False'} </span>

            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>

            <p> Page: {page}</p>

            {/* Botón para consultar otra pagina, si esta cargando deshabilitar */}
            <button onClick={() => handleLoadMore(false)} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Next'}
            </button>

            <button onClick={() => handleLoadMore(true)} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Back'}
            </button>
        </>
    );
};
