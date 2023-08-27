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
    <main className="min-h-screen grid grid-rows-[auto_1fr] gap-4">
      {/* Copied from Pokedex.jsx */}
      <div className="h-[90px]">
        <div className="h-[70%] bg-[#DD1A1A] relative">
          <div className="w-[220px] sm:w-[270px] absolute left-[5%] top-[30px] sm:top-[23px]">
            <img src="public/images/banner.png" alt="" />
          </div>
          <div
            className="h-[65px] aspect-square absolute right-[5%] top-[75%] bg-white rounded-full border-[7px] border-black after:block after:content-[''] after:h-9 after:aspect-square after:bg-[#212121] 
                after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 
                after:border-[6px] after:border-black"
          ></div>
        </div>
        <div className="h-[40%] bg-[#0C0C0C]"></div>
      </div>

      <article className="w-[min(100%,_400px)] mt-8 grid place-items-center px-4 ">
          <header className="h-[100px] w-full relative bg-red-500 grid place-items-center">
            <div className="h-[90px] w-[90px] absolute -top-4 z-10">
              <img 
              className="h-full w-full object-contain"
              src={pokemonData?.image} alt="" />
            </div>
            <div className="w-[80px] h-[20px] bg-black/30 z-0 rounded-[100%] absolute bottom-[20px]"></div>
          </header>
          <section>
            <span>#{pokemonData?.id}</span>
            <StatBarList stats={pokemonData?.stats} />
          </section>
        </article>
    </main>
  );
};
export default PokemonDetail;
