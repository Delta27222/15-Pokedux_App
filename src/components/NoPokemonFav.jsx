import errorNoFavPokemon from '../static/pikachu_sad.png'

export function NoPokemonFav() {

  return(
    <div className="flex flex-col justify-center items-center">
      <img src={errorNoFavPokemon} alt="BigCo Inc. logo" className='h-32 mt-24 mb-5 sm:h-36 md:h-44'/>
      <h1 className='text-lg font-semibold text-center ml-10 mr-10 sm:text-xl'>Right now you don't have any favorite Pokémon. Go and get one!</h1>
      {/* <Button danger  onClick={backMenu}>BACK HOME</Button> */}
    </div>
  )
}

