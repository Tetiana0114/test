
const PokemonList = ({ pokemons }) => {

  return (
    <ul>
      {pokemons &&
              pokemons.map(pokemon => (
            
             <li key={pokemon.id}>{pokemon.name}</li>         
        
        ))}
    </ul>
  );
};

export default PokemonList;