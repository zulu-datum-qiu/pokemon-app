import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import PokemonType from '../pokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
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
  pokemons: PropTypes.arrayOf(PokemonType),
}

export default PokemonRow;