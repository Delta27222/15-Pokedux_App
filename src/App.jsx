/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */

//React
import { useEffect } from 'react';

//React-Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

//Ant Desing
import { Col } from 'antd';

//Components
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';

//SVG
import logo from './static/logo.svg';

//API
import { LoadingPage } from './components/LoadingPage';
import { PokemonNotFound } from './components/PokemonNotFound';
import { NoPokemonFav } from './components/NoPokemonFav';

//Slices
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import { setLoading } from './slices/uiSlice';
import { ShowPageButton } from './components/ShowPageButton';

//Toast
import { Toaster } from 'react-hot-toast';


function App() {
  //Nos traemos del store el valor que necesitamos
  const pokemons = useSelector(state => state.data.pokemons,shallowEqual);
  const favorites = useSelector(state => state.data.favorites,shallowEqual);
  const loading = useSelector(state => state.ui.loading,shallowEqual);
  const searchedPokemons = useSelector(state => state.data.searchedPokemons,shallowEqual);
  const inputValue = useSelector(state => state.data.inputValue,shallowEqual);
  const showErrorNotPokemonFound = useSelector(state => state.data.showErrorNotPokemonFound,shallowEqual);
  const showPage = useSelector(state => state.ui.showPage,shallowEqual)

  //Indicarle al store que acción se quiere realizar:
  const dispach = useDispatch();
  useEffect(() => {
    dispach(setLoading(true))
    dispach(fetchPokemonsWithDetails())
    setTimeout(() => {
      dispach(setLoading(false))
    }, 1000);
  },[])

  return (
    <div className='mt-5 mb-5'>
      {loading
        ? <LoadingPage />
        : <div className='flex flex-col items-center'>
            <Col className='absolute left-6 w-40 '>
              <img  src={logo} alt='Pokedux'/>
            </Col>
            <Col className='mt-12'>
              <Searcher showPage={showPage} active={favorites.length === 0 && showPage === 'favPokemonsList' ? true : false} />
            </Col>
            <ShowPageButton showPage={showPage} inputValue={inputValue}/>
            <Col>
              {showPage === 'pokemonsList'
                ? inputValue.length === 0
                  ? <PokemonList pokemons={pokemons}/>
                  : <PokemonList pokemons={searchedPokemons}/>
                : inputValue.length === 0
                  ? favorites.length === 0
                    ? <NoPokemonFav/>
                    : <PokemonList pokemons={favorites} />
                  : <PokemonList pokemons={searchedPokemons}/>
              }
            </Col>
            <Col className='justify-center items-center mt-16'>
              {showErrorNotPokemonFound ? <PokemonNotFound/> : ''}
            </Col>
          </div>
      }
      <Toaster
          position="top-center"
          toastOptions={{className: '',duration: 1500,}}
      />
    </div>
  );
}


export default (App);
