import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button  } from "antd";
import { useDispatch } from 'react-redux';
import { setFavorites, setLocalStorage } from '../slices/dataSlice';
import toast from 'react-hot-toast';
import { capitalize } from "./PokemonCard";
import { setPageToShow } from "../slices/uiSlice";

export function StarButton({ favorite, disabled, name }) {

  const dispatch = useDispatch();
  const handleOnFavorite = ()=> {
    if(name !== 'pokemonsList' && name !== 'favPokemonsList'){
      dispatch(setFavorites({ name: name, favorite: favorite }))
      dispatch(setLocalStorage({ isFavorite: favorite}))
      !favorite
      ? toast.success( `${capitalize(name)} added to favorites`)
      : toast(`${capitalize(name)} remove from favorites`, {
          icon: '🗑️',
        });
    }else{
      if(name === "pokemonsList"){
        dispatch(setPageToShow('favPokemonsList'))
      }else{
        dispatch(setPageToShow('pokemonsList'))
      }
    }
  }
  const Icon = favorite ? StarFilled : StarOutlined;
  return(
    <>
      {disabled
        ? <Button disabled icon={ <Icon/> } onClick={ () => handleOnFavorite() } className='flex flex-col justify-center items-center scale-75'/>
        : <Button  icon={ <Icon/> } onClick={ () => handleOnFavorite() } className='flex flex-col justify-center items-center scale-75'/>
      }
    </>
  )
}