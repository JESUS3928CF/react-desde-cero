import axios from 'axios'

/// Crear un cliente de axios con una configuración de ruta base
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});