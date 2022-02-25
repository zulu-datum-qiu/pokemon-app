import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PokemonRow from './components/PokemonRow';
import PokemonInfo from './components/PokemonInfo';
import PropTypes from 'prop-types';

import './App.css';

// const PokemonInfo = ({name, base}) => {
//   return(
//     <div>
//       <h1>{name.english}</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Attributes</th>
//             <th>Strength</th>
//           </tr>
//         </thead>
//         <tbody>
//         {
//           Object.keys(base).map(key => (
//             <tr key={key}>
//               <td>{key}</td>
//               <td>{base[key]}</td>
//             </tr>
//           ))
//         }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// PokemonInfo.propTypes = {
//   name: PropTypes.shape({
//     english: PropTypes.string
//   }),
//   base: PropTypes.shape({
//     HP: PropTypes.number.isRequired,
//     Attack: PropTypes.number.isRequired,
//     Defense: PropTypes.number.isRequired,
//     "Sp. Attack": PropTypes.number.isRequired,
//     "Sp. Defense": PropTypes.number.isRequired,
//     Speed: PropTypes.number.isRequired
//   })
// }

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
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
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <Title>Pokemons Search</Title>
      
      <TwoColumnLayout>
        <div>
          <Input value={filter} onChange={(evt) => filterSet(evt.target.value)}/>
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
        </div>
        
        {selectedItem && (
          <PokemonInfo {...selectedItem} />
        )}
        
      </TwoColumnLayout>
    </div>
    </>
  );
}

export default App;
