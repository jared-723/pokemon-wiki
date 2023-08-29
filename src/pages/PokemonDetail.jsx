import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bgStylePokemonType, getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/trainer.slice";

const PokemonDetail = ({ handleDarkmode, darkmode }) => {
    const dispatch = useDispatch()
  const [pokemonData, setpokemonData] = useState(null);
  const handleLogOut = () =>{
    dispatch(logout())
  }
  console.log(pokemonData);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setpokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="min-h-screen grid grid-rows-[auto_1fr] gap-6 pb-[40px]">
      {/* Copied from Pokedex.jsx */}
      <div className="h-[90px]">
        <div className="h-[70%] bg-[#DD1A1A] relative">
          <div className="w-[220px] sm:w-[270px] absolute left-[5%] top-[30px] sm:top-[23px]">
            <img src="/images/banner.png" alt="" />
          </div>
          <div onClick={handleLogOut}
            className="h-[65px] aspect-square absolute right-[5%] top-[75%] bg-white rounded-full border-[7px] border-black after:block after:content-[''] after:h-9 after:aspect-square after:bg-[#212121] 
                after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 
                after:border-[6px] after:border-black transition-colors hover:bg-red-500 cursor-pointer"
          ></div>
          <div
            onClick={handleDarkmode}
            className={`h-[30px] w-[55px] border-2 rounded-full p-[3px] flex items-center cursor-pointer transition-all absolute top-[66px] right-[30%] after:block after:content-[''] after:h-[20px] after:w-[20px] after:rounded-full ${
              darkmode
                ? "after:bg-white border-white justify-end"
                : "after:bg-[#DD1A1A] border-[#DD1A1A] justify-start"
            }`}
          ></div>
        </div>
        <div className="h-[40%] bg-[#0C0C0C]"></div>
      </div>

      <article className="w-[min(100%,_400px)] mt-8 justify-self-center grid place-items-center px-4 ">
        <section
          className={`w-full shadow-2xl p-[2px] pb-4 grid gap-6 border-[1px] rounded-md ${
            darkmode ? "border-[#252525]" : "border-slate-200"
          } `}
        >
          <header
            className={`h-[120px] w-full relative ${
              bgStylePokemonType[pokemonData?.types[0]]
            } flex justify-center items-center`}
          >
            <div className="absolute left-4 bottom-2 h-[50px]">
              <img className="h-full w-full object-contain" src={pokemonData?.image_gif_front} alt="" />
            </div>

            <div className="h-[120px] w-[120px] absolute -top-4 ">
              <img
                className="h-full w-full object-contain"
                src={pokemonData?.image}
                alt=""
              />
            </div>

            <div className="absolute right-4 bottom-2 h-[50px]">
              <img className="h-full w-full object-contain" src={pokemonData?.image_gif_back} alt="" />
            </div>
          </header>
          
          <section className="w-full px-4 text-center flex flex-col gap-4">
            <div>
              <span
                className={`p-2 px-4 border-[2px] font-bold text-lg lg:text-2xl ${
                  darkmode
                    ? "text-white border-[#252525]"
                    : "text-black border-slate-200"
                }`}
              >
                #{pokemonData?.id}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <hr className="w-full" />
              <h2
                className={`font-semibold capitalize ${
                  darkmode ? "text-white" : "text-black"
                }`}
              >
                {pokemonData?.name}
              </h2>
              <hr className="w-full" />
            </div>

            <div className="flex justify-center gap-4">
              <div className="flex flex-col items-center">
                <p className="text-sm font-thin">Height</p>{" "}
                <span>{pokemonData?.height}</span>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-thin">weight</p>{" "}
                <span>{pokemonData?.weight}</span>
              </div>
              <section>
                <div>
                  <h3>Type</h3>
                  <div>{pokemonData?.types}</div>

                </div>
                <div>
                  <h3>Abilities</h3>

                </div>
              </section>
            </div>
            <StatBarList stats={pokemonData?.stats} darkmode={darkmode} />
          </section>
          <section>
            
          </section>
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
