import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import {  setInputValue, setSearchPokemon } from '../slices/dataSlice';

export function Searcher({ showPage, active }) {
  //Indicarle al store que acción se quiere realizar:
  const dispach = useDispatch();
  const onSearchPokemon = (event) => {
    console.log('antes de estrar a serSearhctValue')
    dispach(setSearchPokemon({ value: event.target.value, showPage:showPage }))
    dispach(setInputValue({ value: event.target.value }))
  }

  return(
    <>
    {!active
    ? <Input
        placeholder='Search'
        onChange={onSearchPokemon}
      />
    : <Input
      disabled
      placeholder='Search'
      onChange={onSearchPokemon}
      />
    }
    </>
  )
}
