import React, { useContext } from 'react';
import PokemonRow from './PokemonRow';
import store from '../store';
import { observer } from 'mobx-react';

const PokemonTable = () => {
  
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
          store.pokemons
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(store.filter.toLowerCase()))
          .slice(0,20)
          .map((pokemon, index) => (
            <PokemonRow pokemon={pokemon} key={index} onClick={(pokemon) => store.setSelectedItem(pokemon)}/>
          ))
        }
      </tbody>
    </table>
  )
}

export default observer(PokemonTable);