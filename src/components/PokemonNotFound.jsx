import error404 from '../static/pokemon_not_found.jpg'

export function PokemonNotFound() {
  return(
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-3xl text-red-700 blur-[1px]'>SORRY</h1>
      <img src={error404} alt="BigCo Inc. logo" className='h-32 mt-5 mb-5 sm:h-44 md:h-56'/>
      <h1 className='text-xl font-semibold mb-5'>Pokemon not found</h1>
      {/* <Button danger  onClick={backMenu}>BACK HOME</Button> */}
    </div>
  )
}

