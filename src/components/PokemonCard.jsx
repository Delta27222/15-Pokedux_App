import { Card, Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StarButton } from './StartButton';

//Lazy loading Component
import { LazyLoadImage } from "react-lazy-load-image-component";
import noImage from '../static/no-pictures.png'

export function PokemonCard({ name, image, abilities, types, favorite }) {
  const typeString = types.map(element => (element.type.name).slice(1)).join(', ')
  const abilitiess = abilities.map(ability => (ability.ability.name).slice(1)).join(', ')
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
          // eslint-disable-next-line jsx-a11y/alt-text
          <div className='pl-[34px] pt-[24px] '>
            <LazyLoadImage
              key={name}
              alt={ name }
              src={ image }
              className='h-36'
              placeholderSrc={noImage}
            />
          </div>
        }
        extra={<StarButton disabled={ false } favorite={ favorite } name={name}/>}
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
export const capitalize = (str) => {
  const word =str.charAt(0).toUpperCase() + str.slice(1);
  return word
}

