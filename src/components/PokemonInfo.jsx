import React, { useContext } from 'react';
import PokemonContext from '../PokemonContext';
import PokemonType from '../pokemonType';

const PokemonInfo = () => {
  
  const {selectedItem } = useContext(PokemonContext);
  
  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
        {
          Object.keys(selectedItem.base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  ): null;
}

PokemonInfo.propTypes = PokemonType | "undefined";

export default PokemonInfo;