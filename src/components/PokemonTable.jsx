import React, { useContext } from 'react';
import PokemonContext from '../PokemonContext';
import PokemonRow from './PokemonRow';

const PokemonTable = () => {

  const {pokemons, filter, selectedItemSet} = useContext(PokemonContext);
  
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          pokemons
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0,20)
          .map((pokemon, index) => (
            <PokemonRow pokemon={pokemon} key={index} onClick={(pokemon) => selectedItemSet(pokemon)}/>
          ))
        }
        
      </tbody>
    </table>
  )
}

export default PokemonTable;