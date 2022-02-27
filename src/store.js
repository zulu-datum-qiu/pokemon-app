import { makeObservable, observable, computed, action } from 'mobx';

class Store {
  pokemons = [];
  filter = "";
  selectedItem = null

  constructor(){
    makeObservable(this, {
      pokemons: observable,
      filter: observable,
      selectedItem: observable,
      setPokemons: action,
      setFilter: action,
      setSelectedItem: action,
      filteredPokemon: computed
    });
  }

  get filteredPokemon(){
    return this.pokemons
    .filter(
      (pokemon) => pokemon.name.english.toLowerCase().includes(this.filter.toLowerCase())
    )
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