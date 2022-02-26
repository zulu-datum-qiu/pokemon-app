import { makeAutoObservable } from 'mobx';

class Store {
  pokemons = [];
  filter = "";
  selectedItem = null

  constructor(){
    makeAutoObservable(this);
  }

  setPokemons(pokemons){
    this.pokemons = pokemons;
  }

  setFilter(filter){
    this.filter = filter;
  }

  setSelectedItem(selectedItem){
    this.selectedItem = selectedItem;
  }
};

const store = new Store();

const pullData = async() => {
  const resp = await fetch("http://localhost:3000/pokemon-app/pokemon.json");
  const data = await resp.json();
  
  // update the state that tracks the pokemon data
  store.setPokemons(data);
}

pullData();

export default store;