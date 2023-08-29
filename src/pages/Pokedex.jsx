import { useState } from "react";
import { PokemonList } from "../components/pokedex/PokemonList";
import { usePokedex } from "../hooks/usePokedex";
import Pagination from "../components/pokedex/Pagination";
import { paginateData } from "../utils/pagination";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/trainer.slice";

const Pokedex = ({ handleDarkmode, darkmode }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handleLogOut = () => {
    dispatch(logout());
  };

  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonByName,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonByName,
    currentPage
  );

  return (
    <main className="grid gap-8">
      <section>
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
        <div className="flex justify-center items-center">
          <div className="w-[80%]">
            <p
              className={`py-[40px] ${darkmode ? "text-white" : "text-black"} `}
            >
              <span
                className={`font-bold text-[#ff0000] ${
                  darkmode ? "text-[#ffc125]" : "text-[#ff0000]"
                } `}
              >
                Welcome {name},
              </span>{" "}
              Here you can find your favorite pokemon
            </p>
            <form className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex items-center">
                <input
                  value={pokemonName}
                  onChange={handleChange(setPokemonName)}
                  className={`shadow-md w-[50%] sm:w-[200px] md:w-[280px] lg:w-[340px] pl-[10px] py-[10px] text-sm  ${
                    darkmode
                      ? "text-white bg-[#272c34]"
                      : "placeholder:text-[#747474] text-black"
                  } `}
                  placeholder="Search pokemon..."
                  type="text"
                />
                <button
                  className={`w-[120px] text-white py-[8px] font-bold ${
                    darkmode ? "bg-[#ffc125]" : "bg-[#D93F3F]"
                  } `}
                >
                  Search
                </button>
              </div>
              <select
                value={pokemonType}
                onChange={handleChange(setPokemonType)}
                className={`shadow-md w-[70%] sm:w-[180px] md:w-[200px] lg:w-[40%] px-3 py-[8px] capitalize ${
                  darkmode ? "text-white bg-[#272c34]" : "text-black"
                } `}
              >
                <option value="">All pokemon</option>

                {types.map((type) => (
                  <option
                    className="capitalize"
                    key={type.name}
                    value={type.name}
                  >
                    {type.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </section>

      <PokemonList pokemons={itemsInCurrentPage} darkmode={darkmode} />

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        darkmode={darkmode}
      />
    </main>
  );
};
export default Pokedex;
