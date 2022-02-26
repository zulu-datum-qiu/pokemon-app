import React, { useEffect, useReducer, useState } from 'react';
import styled from '@emotion/styled';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

import './App.css';

// reducer to facilitate the centralize management
// of the various state variables
// better practice for code maintenance
const pokemonReducer = (state, action) => {
  switch(action.type){
    case "SET_FILTER":
      return {
        ... state,
        filter : action.payload,
      };
    case "SET_POKEMONS":
      return {
        ... state,
        pokemons : action.payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ... state,
        selectedItem : action.payload,
      }
    default:
      throw new Error("Action not defined.");
  }
}

// styled Title component
const Title = styled.h1`
  text-align: center;
`;

// styled Layout component
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

// styled Page Container component
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  
  // initialize the state
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: "",
    pokemons: [],
    selectedPokemon: null
  });

  // get the pokemons json data
  useEffect(async ()=>{
    
    const resp = await fetch("http://localhost:3000/pokemon-app/pokemon.json")
    const data = await resp.json();

    // update the state that tracks the pokemon data
    dispatch({
      type: "SET_POKEMONS", 
      payload: data
    });
  }, []);

  // when loading
  if( !state.pokemons ){
    return (
      <div>Loading ...</div>
    )
  }

  // page rendering
  return (
    <>
      <PokemonContext.Provider
        value={{
          state,
          dispatch
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
