import { useEffect, useState } from "react";
import { bgStylePokemonType, borderStylePokemonType, getPokemonByUrl, joinPokemonTypes, textColorPokemonType } from "../../services/pokemons";
import StatsList from "./StatsList";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl, darkmode}) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

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
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[90px] aspect-square">
          <img
            className="h-full w-full object-contain "
            src={pokemonInfo?.image}
            alt=""
          />
        </div>
      </header>
      <section>
        <h3 className={`text-lg font-bold ${textColorPokemonType[pokemonInfo?.types[0]]}`}>{pokemonInfo?.name}</h3>
        <h4 className={`${darkmode ? 'text-white' : 'text-black'}`}>{joinPokemonTypes(pokemonInfo?.types)}</h4>
        <h5 className={`text-[10px] mb-2 font-semibold ${darkmode ? 'text-white/50' : 'text-black/50'} `}>Type</h5>
        <hr />
        <StatsList stats={pokemonInfo?.stats} type = {pokemonInfo?.types[0]} darkmode={darkmode} />
      </section>
    </Link>
  );
};
export default PokemonCard;
