import { computed, makeAutoObservable, makeObservable, observable } from "mobx";

const ITEMS_PER_PAGE = 10;


class Store {
    pokemon = [];
    selected = null;
    constructor() {
        makeAutoObservable(this);
    }
    setPokemon(pokemon){
        console.log('set pokemon')
        this.pokemon = pokemon;
    }
    setSelected(pokemon){
        console.log('set selected pokemon')
        this.selected = pokemon
    }
}

const store = new Store();

fetch("http://localhost:3000/pokemon.json")
    .then(resp => resp.json())
    .then((pokemon => {
        store.setPokemon(pokemon)
}))


export default store;