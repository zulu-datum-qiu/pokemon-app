import React from 'react';
import PokemonType from '../pokemonType';

const PokemonInfo = ({name, base}) => {
  return(
    <div>
      <h1>{name.english}</h1>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
        {
          Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

PokemonInfo.propTypes = PokemonType | "undefined";

export default PokemonInfo;