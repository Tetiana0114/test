import SearchBar from 'components/Searchbar';
import { useState, useEffect } from 'react';
import { getPokemonList } from './services/fetchItems';
import Loader from './Loader';
import PokemonList from './PokemonList';

export const App = () => {
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false); 

   useEffect(() => {
  
    const getPokemons = async () => {
      setLoading(true);
      try {
        const pokemonList = await getPokemonList();
        setPokemons(pokemonList);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    getPokemons();

  }, []);
  
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar />
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {pokemons && <PokemonList pokemons={pokemons} />}
    </div>
  );
};