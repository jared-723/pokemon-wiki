import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  bgStylePokemonType,
  getPokemonById,
  textColorPokemonType,
  bgColorTypeDetails,
} from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/trainer.slice";

const PokemonDetail = ({ handleDarkmode, darkmode }) => {
  const dispatch = useDispatch();
  const [pokemonData, setpokemonData] = useState(null);
  const handleLogOut = () => {
    dispatch(logout());
  };
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
        <div
          className={`h-[70%] relative ${
            darkmode ? "bg-[#ffc125]" : "bg-[#DD1A1A]"
          } `}
        >
          <div className="w-[220px] sm:w-[270px] absolute left-[5%] top-[30px] sm:top-[23px]">
            <img src="/images/banner.png" alt="" />
          </div>
          <div
            onClick={handleLogOut}
            className={`h-[65px] aspect-square absolute right-[5%] top-[75%] bg-white rounded-full border-[7px] border-black after:block after:content-[''] after:h-9 after:aspect-square
                after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 
                after:border-[6px] after:border-black ${
                  darkmode
                    ? "after:bg-[#3e3213] hover:bg-[#ffc125]"
                    : "after:bg-[#212121] hover:bg-red-500"
                } transition-colors cursor-pointer`}
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

      <article className="w-[min(100%,_600px)] mt-8 justify-self-center grid place-items-center px-4 ">
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
            <div className="absolute left-4 lg:left-8 bottom-2 h-[50px]">
              <img
                className="h-full w-full object-contain"
                src={pokemonData?.image_gif_front}
                alt=""
              />
            </div>

            <div className="h-[120px] w-[120px] absolute -top-4 ">
              <img
                className="h-full w-full object-contain"
                src={pokemonData?.image}
                alt=""
              />
            </div>

            <div className="absolute right-4 lg:right-8 bottom-2 h-[50px]">
              <img
                className="h-full w-full object-contain"
                src={pokemonData?.image_gif_back}
                alt=""
              />
            </div>
          </header>

          <section className="w-full px-4 text-center flex flex-col gap-4">
            <div>
              <span
                className={`p-2 px-4 border-[1px] font-bold text-lg lg:text-2xl ${
                  darkmode ? " border-[#252525]" : " border-slate-200"
                } ${textColorPokemonType[pokemonData?.types[0]]}`}
              >
                #{pokemonData?.id}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <hr className="w-full" />
              <h2
                className={`font-semibold capitalize text-3xl  ${
                  textColorPokemonType[pokemonData?.types[0]]
                }`}
              >
                {pokemonData?.name}
              </h2>
              <hr className="w-full" />
            </div>

            <div
              className={`flex flex-col justify-center gap-4 ${
                darkmode ? "text-white" : "text-black"
              }`}
            >
              <div className="flex justify-center items-center gap-4">
                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-semibold">Height</p>{" "}
                  <span className="text-[15px] font-semibold">
                    {pokemonData?.height}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-semibold">weight</p>{" "}
                  <span className="text-[15px] font-semibold">
                    {pokemonData?.weight}
                  </span>
                </div>
              </div>
              <section className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <div className="w-[50%] flex flex-col justify-center items-center gap-4 font-semibold">
                  <h3 className={` ${darkmode ? "text-white" : "text-black"}`}>
                    Type
                  </h3>
                  <div className="flex justify-center items-center gap-4">
                    <p
                      className={`text-white w-[100px] sm:w-[120px] py-1 ${
                        bgColorTypeDetails[pokemonData?.types[0]]
                      }`}
                    >
                      {pokemonData?.types[0]}
                    </p>
                    <p
                      className={`text-white w-[100px] sm:w-[120px] py-1 ${
                        bgColorTypeDetails[pokemonData?.types[1]]
                      }`}
                    >
                      {pokemonData?.types[1]}
                    </p>
                  </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center items-center gap-4 font-semibold">
                  <h3 className={` ${darkmode ? "text-white" : "text-black"}`}>
                    Abilities
                  </h3>
                  <div className="flex justify-center items-center gap-4">
                    <p
                      className={`w-[100px] sm:w-[120px] py-1 border-[1px]  ${
                        darkmode ? "border-[#6c6c6c]" : "border-[#c9c9c9]"
                      }`}
                    >
                      {pokemonData?.abilities[0].ability.name}
                    </p>
                    <p
                      className={`w-[100px] sm:w-[120px] py-1 border-[1px]  ${
                        darkmode ? "border-[#6c6c6c]" : "border-[#c9c9c9]"
                      }`}
                    >
                      {pokemonData?.abilities[1]?.ability.name}
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <StatBarList stats={pokemonData?.stats} darkmode={darkmode} />
          </section>
          <section></section>
        </section>
      </article>
      <article className="w-[min(100%,_600px)] p-[15px] mt-2 justify-self-center grid place-items-center">
        <section
          className={`w-full shadow-2xl p-[15px] pb-4 grid gap-6 border-[1px] rounded-md ${
            darkmode ? "border-[#252525]" : "border-slate-200"
          } `}
        >
          <div className="flex justify-center items-center gap-4">
            <h3 className={`font-semibold text-3xl ${darkmode ? 'text-white' : 'text-black'}`}>Movements</h3>
            <hr className="w-full" />
            <div className="h-[60px] -rotate-12">
              <div className={`h-[50%] w-[60px] border-l-[2px] border-t-[2px] border-r-[2px] rounded-t-full ${darkmode ? "border-[#252525]" : "border-slate-200"} `}></div>
              <div className={`h-[50%] w-[60px] border-[2px] relative rounded-b-full  ${darkmode ? "border-[#252525]" : "border-slate-200"}`}>
                <div className={`h-[20px] w-[20px] border-2 absolute top-[-40%] right-[32%] rounded-full after:block after:content-[''] after:h-[10px] after:w-[10px] after:border-2 after:absolute after:top-[20%] after:right-[19.335%] after:rounded-full ${darkmode ? "border-[#252525] after:border-[#252525] bg-[#171d23]" : "border-slate-200 after:border-slate-200 bg-white"}`}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            {pokemonData?.moves.map((move) => (
              <span
                key={move.move.name}
                className={`px-4 py-2 rounded-full ${
                  darkmode
                    ? "bg-[#10121a] text-white"
                    : "bg-[#c9c9c9] text-black"
                }`}
              >
                {move.move.name}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
