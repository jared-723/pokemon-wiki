import { PokemonList } from "../components/pokedex/PokemonList";
import { usePokedex } from "../hooks/usePokedex";

const Pokedex = () => {
  
  const {name,pokemonName, setPokemonName, pokemonType, setPokemonType, handleChange, pokemonByName} = usePokedex()

  return (
    <main>
      <section>
        <p>
          <span>Welcome {name}!.</span> Here you can find your favorite pokemon
        </p>
        <form>
          <div>
            <input value={pokemonName} onChange={handleChange(setPokemonName)} placeholder="Search pokemon..." type="text" />
          </div>
          <select value= {pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemon</option>
            <option value="rock">Rock</option>
          </select>
        </form>
      </section>
      <PokemonList pokemons={pokemonByName} />
    </main>
  );
};
export default Pokedex;
