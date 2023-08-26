import { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";
import StatsList from "./StatsList";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const joinPokemonTypes = (types = []) =>{
    return types.slice(0,2).join(" / ")
  }

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article className="text-center">
      <header>
        <div>
          <img src={pokemonInfo?.image} alt="" />
        </div>
      </header>
      <section>
        <h3>{pokemonInfo?.name}</h3>
        <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
        <h5>Types</h5>
        <StatsList stats={pokemonInfo?.stats}/>
      </section>
    </article>
  );
};
export default PokemonCard;
