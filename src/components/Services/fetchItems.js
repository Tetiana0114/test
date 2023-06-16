import axios from 'axios';

const BASIC_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = async () => {
    const response = await axios.get(`${BASIC_URL}?offset=20&limit=20`);
    return response.data.results;
};