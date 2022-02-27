import React from 'react';
import { Button } from '@mui/material';
import PokemonType from '../pokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More ...
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemons: PokemonType,
}

export default PokemonRow;