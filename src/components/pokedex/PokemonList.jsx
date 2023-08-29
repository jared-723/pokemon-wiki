import PokemonCard from "./PokemonCard"

    export const PokemonList = ({pokemons, darkmode, handleLogOut}) => {
      return (
        <section className="grid px-4 lg:px-16 gap-4 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
            {
                pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemonUrl = {pokemon.url} darkmode={darkmode} />)
            }
        </section>
      )
    }