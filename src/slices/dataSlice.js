import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../Utils/api';

const countPokemonsFav = localStorage.getItem('COUNT_POKEMONS_FAVORITES') !== 0 ? JSON.parse(localStorage.getItem('COUNT_POKEMONS_FAVORITES')) : 0
const favPokemonsFromLocalStorage = localStorage.getItem('POKEMONS_FAVORITES') !== null ? JSON.parse(localStorage.getItem('POKEMONS_FAVORITES')) : []

const initialState ={
  pokemons:[],
  favorites: favPokemonsFromLocalStorage,
  searchedPokemons: [],
  inputValue: '',
  countPokemonsFavorites: countPokemonsFav,
  showErrorNotPokemonFound: false
}
export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    const pokemonsRes = await getPokemon()
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      )
    dispatch(setPokemons(pokemonsDetailed))
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers:{
    setPokemons: (state, action) => {
      let integer = 0
      action.payload.forEach((pokemon) => {
        pokemon.favorite = false
        pokemon.indexPokemon = integer
        integer = integer + 1
        return pokemon;
      });
      state.pokemons = action.payload
      state.favorites.forEach(pokemonFav => {
        action.payload[pokemonFav.indexPokemon].favorite = true
      });
    },
    setFavorites: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      )
        const siFalse = false
        if(state.inputValue !== '' && state.searchedPokemons.length !== 0){
          const currentPokemonIndexSearch = state.searchedPokemons.findIndex(
            (pokemon) => pokemon.name === action.payload.name
          )
       
          if (currentPokemonIndexSearch >= 0){
            state.searchedPokemons[currentPokemonIndexSearch].favorite = !action.payload.favorite
            if(action.payload.favorite){
              state.searchedPokemons = state.searchedPokemons.filter(pokemon => pokemon.name !== action.payload.name)
              if(state.searchedPokemons.length === 0){
                state.showErrorNotPokemonFound = true
              }
            }
          }
        }

      if(!action.payload.favorite){
        state.pokemons[currentPokemonIndex].favorite = !action.payload.favorite
        state.favorites.push(state.pokemons[currentPokemonIndex])
        state.favorites[state.favorites.length-1].indexPokemon = currentPokemonIndex
      }else{
        state.pokemons[currentPokemonIndex].favorite = !action.payload.favorite
        state.favorites = state.favorites.filter(pokemon => pokemon.name !== action.payload.name)
      }
    },
    setSearchPokemon: (state, action) => {
      let arrayPoke = []
      if(action.payload.showPage === 'pokemonsList'){
        arrayPoke = state.pokemons
      }else{
        arrayPoke = state.favorites
      }
      state.searchedPokemons = arrayPoke.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase();
        const searchPokemonName = action.payload.value.toLowerCase();
        return pokemonName.includes(searchPokemonName);
      })
      if(state.searchedPokemons.length === 0){
        state.showErrorNotPokemonFound = true
      }else{
        state.showErrorNotPokemonFound = false
      }
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload.value
      if(state.inputValue === ''){
        state.searchedPokemons = []
      }
    },
    setLocalStorage: (state, action) => {
      let countPokemons = state.countPokemonsFavorites
      localStorage.setItem('POKEMONS_FAVORITES', JSON.stringify(state.favorites.map((item) => item)))
      if(!action.payload.isFavorite){
        countPokemons = countPokemons + 1
      }else{
        countPokemons = countPokemons - 1
      }
      localStorage.setItem('COUNT_POKEMONS_FAVORITES', JSON.stringify(countPokemons))
      state.countPokemonsFavorites = countPokemons
    }
  },
});

export const { setPokemons, setFavorites, setSearchPokemon, setInputValue, setLocalStorage } = dataSlice.actions;

export default dataSlice.reducer;