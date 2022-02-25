import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

import './App.css';

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  
  const [filter, filterSet] = useState("");
  const [pokemons, pokemonsSet] = useState([]);
  const [selectedItem, selectedItemSet] = useState(null);

  useEffect(async ()=>{
    // get the pokemon json data
    const resp = await fetch("http://localhost:3000/pokemon-app/pokemon.json")
    const data = await resp.json();

    // update the state that tracks the pokemon data
    pokemonsSet(data);
  }, []);

  if( !pokemons ){
    return (
      <div>Loading ...</div>
    )
  }

  return (
    <>
      <PokemonContext.Provider
        value={{
          filter,
          pokemons,
          selectedItem,
          filterSet,
          pokemonsSet,
          selectedItemSet,
        }}    
      >
        <PageContainer>
          <Title>Pokemons Search</Title>
          <TwoColumnLayout>
            <div>
              <PokemonFilter />
              <PokemonTable />
            </div>
            
            <PokemonInfo />
            
          </TwoColumnLayout>
        </PageContainer>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
