import { Card, Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorites, setLocalStorage } from '../slices/dataSlice';
import { StarButton } from './StartButton';

export function PokemonCard({ name, image, abilities, types, favorite }) {
  const dispatch = useDispatch();
  const typeString = types.map(element => (element.type.name).slice(1)).join(', ')
  const abilitiess = abilities.map(ability => (ability.ability.name).slice(1)).join(', ')
  const handleOnFavorite = ()=> {
    console.log("🚀 ~ file: PokemonCard.jsx:8 ~ PokemonCard ~ favorite:", favorite)
    console.log("🚀 ~ file: PokemonCard.jsx:8 ~ PokemonCard ~ name:", name)
    dispatch(setFavorites({ name: name, favorite: favorite }))
    dispatch(setLocalStorage({ isFavorite: favorite}))
  }

  return(
    <>
      <Card
        className='flex flex-col w-52 m-auto mt-5 mx-5'
        title={
          <div className='flex flex-col gap-0'>
            <h1 className=''>{capitalize(name)}</h1>
            <p className='text-xs text-gray-400'>{capitalize(typeString)}</p>
          </div>
        }
        cover={
          <img
          className='scale-75'
            alt={ name }
            src={ image }
          />
        }
        extra={<StarButton disabled={ false } favorite={ favorite } onClick={() => handleOnFavorite()}/>}
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title={
            <div className='flex flex-col gap-0'>
              <h1 className=''>Abilities</h1>
              <p className='text-[10px] text-gray-400'>{capitalize(abilitiess)}</p>
            </div>
          }
        />
      </Card>
    </>
  )
}
const capitalize = (str) => {
  const word =str.charAt(0).toUpperCase() + str.slice(1);
  return word
}

