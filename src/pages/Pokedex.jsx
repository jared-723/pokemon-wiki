import { PokemonList } from "../components/pokedex/PokemonList";
import { usePokedex } from "../hooks/usePokedex";

const Pokedex = ({ handleDarkmode, darkmode }) => {
  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonByName,
  } = usePokedex();

  return (
    <main className="grid gap-8">
      <section>
        <div className="h-[90px]">
          <div className="h-[70%] bg-[#DD1A1A] relative">
            <div className="w-[220px] sm:w-[270px] absolute left-[5%] top-[30px] sm:top-[23px]">
              <img src="/images/banner.png" alt="" />
            </div>
            <div
              className="h-[65px] aspect-square absolute right-[5%] top-[75%] bg-white rounded-full border-[7px] border-black after:block after:content-[''] after:h-9 after:aspect-square after:bg-[#212121] 
                after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 
                after:border-[6px] after:border-black"
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
              <span className="font-bold text-[#ff0000]">Welcome {name},</span>{" "}
              Here you can find your favorite pokemon
            </p>
            <form className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex items-center">
                <input
                  value={pokemonName}
                  onChange={handleChange(setPokemonName)}
                  className={`shadow-md w-[50%] sm:w-[200px] md:w-[280px] lg:w-[340px] pl-[10px] py-[10px] text-sm  ${
                    darkmode
                      ? "text-white bg-[#383838]"
                      : "placeholder:text-[#747474] text-black"
                  } `}
                  placeholder="Search pokemon..."
                  type="text"
                />
                <button className="bg-[#D93F3F] text-white w-[120px] py-[8px]">
                  Search
                </button>
              </div>
              <select
                value={pokemonType}
                onChange={handleChange(setPokemonType)}
                className={`shadow-md w-[70%] sm:w-[180px] md:w-[200px] lg:w-[40%] px-3 py-[8px] ${darkmode ? 'text-white bg-[#383838]' : 'text-black'} `}
              >
                <option value="">All pokemon</option>
                <option value="grass">Grass</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="rock">Rock</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="electric">Electric</option>
                <option value="ground">Ground</option>
                <option value="fairy">Fairy</option>

                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="ghost">Ghost</option>
                <option value="ice">Ice</option>
                <option value="psychic">Psychic</option>
                <option value="steel">Steel</option>
              </select>
            </form>
          </div>
        </div>
      </section>
      <PokemonList pokemons={pokemonByName} darkmode={darkmode} />
    </main>
  );
};
export default Pokedex;
