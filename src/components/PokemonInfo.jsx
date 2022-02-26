import React from 'react';

import store from '../store';
import { observer } from 'mobx-react';

const PokemonInfo = () => {
  
  // const { state:{selectedItem} } = useContext(PokemonContext);
  
  return store.selectedItem ? (
    <div>
      <h1>{store.selectedItem.name.english}</h1>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
        {
          Object.keys(store.selectedItem.base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{store.selectedItem.base[key]}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  ): null;
}

export default observer(PokemonInfo);