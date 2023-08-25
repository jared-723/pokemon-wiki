import PokemonCard from "./PokemonCard"

    export const PokemonList = ({pokemons}) => {
      return (
        <section>
            {
                pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemonUrl = {pokemon.url}/>)
            }
        </section>
      )
    }