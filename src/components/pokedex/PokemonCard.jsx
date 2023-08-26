import { useEffect, useState } from "react";
import { getPokemonByUrl, joinPokemonTypes } from "../../services/pokemons";
import StatsList from "./StatsList";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const borderStylePokemonType = {
    grass: "border-[5px] border-green-500",
    fire: "border-[5px] border-orange-500",
  };

  const bgStylePokemonType = {
    grass: "bg-gradient-to-b from-green-500 to-green-300",
    fire: "bg-gradient-to-b from-orange-500 to-orange-300",
  };

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link 
    to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center capitalize rounded-md  ${
        borderStylePokemonType[pokemonInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px] relative mb-8 ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        }}`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
          <img
            className="h-full w-full object-contain "
            src={pokemonInfo?.image}
            alt=""
          />
        </div>
      </header>
      <section>
        <h3 className="text-lg font-bold">{pokemonInfo?.name}</h3>
        <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <StatsList stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokemonCard;
