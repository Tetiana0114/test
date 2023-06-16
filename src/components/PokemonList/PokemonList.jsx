import PropTypes from 'prop-types';

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

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
})),
};

export default PokemonList;