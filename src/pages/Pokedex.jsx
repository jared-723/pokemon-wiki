import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPokemons } from "../services/pokemons";
import { PokemonList } from "../components/pokedex/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");

  const { name } = useSelector((store) => store.trainer);

  const pokemonByName = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));

  console.log(pokemonByName)
  const handleChange = (setState) => (e) => {
    setState = e.target.value
  }

  useEffect(() => {
    getAllPokemons()
      .then((data) => setPokemons(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    if(pokemonType){

    }
  },[pokemonType])

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
