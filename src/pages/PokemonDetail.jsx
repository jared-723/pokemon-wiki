import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import FooterPokeball from "../components/layout/FooterPokeball";

const PokemonDetail = () => {
  const [pokemonData, setpokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setpokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="min-h-screen grid grid-rows-[auto_1fr]">
      <FooterPokeball />
      <section className="h-[80%]">
        <article className=" w-[min(100%,_400px)]">
          <header>
            <div>
              <img src={pokemonData?.image} alt="" />
            </div>
          </header>
          <section>
            <span>#{pokemonData?.id}</span>
            <StatBarList stats={pokemonData?.stats} />
          </section>
        </article>
      </section>
    </main>
  );
};
export default PokemonDetail;
