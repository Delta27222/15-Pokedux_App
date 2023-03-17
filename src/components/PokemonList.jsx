import { PokemonCard } from "./PokemonCard";

export function PokemonList( { pokemons } ) {
  return(
    <div className="grid items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pokemons.map((pokemon, idx) => {
        return <PokemonCard key={idx} name={pokemon.name} image={pokemon.sprites.front_default} abilities={pokemon.abilities} types={pokemon.types} id={pokemon.id} favorite={pokemon.favorite} />
      })}
    </div>
  )
}

