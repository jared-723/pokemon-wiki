import axios from "axios";

export const getAllPokemons = async () => {
  //Por ahora lo ejamos asi, solo trae 2o pokemons
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL);
  return data.results;
};

export const getPokemonsByType = async (pokemonType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonType}`;
  const { data } = await axios.get(url);
  const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemons;
};

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const dataPokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image: data.sprites.other["official-artwork"].front_default,
    image_gif:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    image_gif_back:
      data.sprites.versions["generation-v"]["black-white"].animated
        .back_default,
  };

  return dataPokemon;
};

export const getAllTypes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  return data.results;
};

export const getPokemonById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  const { data } = await axios.get(url);

  const dataPokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image: data.sprites.other["official-artwork"].front_default,
    image_gif_front:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    image_gif_back:
      data.sprites.versions["generation-v"]["black-white"].animated
        .back_default,

    weight: data.weight,
    height: data.height,
    abilities: data.abilities,
    moves: data.moves,
  };
  return dataPokemon;
};

const formatStats = (stats) => {
  return stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

export const joinPokemonTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};

const borderStylePokemonType = {
  grass: "border-[5px] border-green-500",
  fire: "border-[5px] border-orange-500",
  water: "border-[5px] border-blue-500",
  bug: "border-[5px] border-green-500",
  normal: "border-[5px] border-slate-400",
  poison: "border-[5px] border-purple-500",
  electric: "border-[5px] border-yellow-500",
  ground: "border-[5px] border-amber-950",
  rock: "border-[5px] border-stone-600",
  fairy: "border-[5px] border-pink-500",
  dark: "border-[5px] border-zinc-900",
  dragon: "border-[5px] border-indigo-700",
  fighting: "border-[5px] border-yellow-900",
  flying: "border-[5px] border-cyan-500",
  ghost: "border-[5px] border-violet-900",
  ice: "border-[5px] border-sky-300",
  psychic: "border-[5px] border-fuchsia-500",
  steel: "border-[5px] border-gray-500",
};

const bgStylePokemonType = {
  grass: "bg-gradient-to-b from-green-500 to-green-300",
  fire: "bg-gradient-to-b from-orange-500 to-orange-300",
  water: "bg-gradient-to-b from-blue-500 to-blue-300",
  bug: "bg-gradient-to-b from-green-500 to-green-300",
  normal: "bg-gradient-to-b from-slate-400 to-slate-200",
  poison: "bg-gradient-to-b from-purple-500 to-purple-300",
  electric: "bg-gradient-to-b from-yellow-500 to-yellow-300",
  ground: "bg-gradient-to-b from-amber-950 to-amber-700",
  rock: "bg-gradient-to-b from-stone-600 to-stone-300",
  fairy: "bg-gradient-to-b from-pink-500 to-pink-300",
  dark: "bg-gradient-to-b from-zinc-900 to-zinc-700",
  dragon: "bg-gradient-to-b from-indigo-700 to-indigo-500",
  fighting: "bg-gradient-to-b from-yellow-900 to-yellow-700",
  flying: "bg-gradient-to-b from-cyan-500 to-yellow-300",
  ghost: "bg-gradient-to-b from-violet-900 to-violet-700",
  ice: "bg-gradient-to-b from-sky-300 to-sky-100",
  psychic: "bg-gradient-to-b from-fuchsia-500 to-fuchsia-300",
  steel: "bg-gradient-to-b from-gray-500 to-gray-300",
};

const textColorPokemonType = {
  grass: "text-green-500",
  fire: "text-orange-500",
  water: "text-blue-500",
  bug: "text-green-500",
  normal: "text-slate-400",
  poison: "text-purple-500",
  electric: "text-yellow-500",
  ground: "text-amber-950",
  rock: "text-stone-600",
  fairy: "text-pink-500",
  dark: "text-zinc-900",
  dragon: "text-indigo-700",
  fighting: "text-yellow-900",
  flying: "text-cyan-500",
  ghost: "text-violet-900",
  ice: "text-sky-300",
  psychic: "text-fuchsia-500",
  steel: "text-gray-500",
};

const bgColorTypeDetails = {
  grass: "bg-green-500",
  fire: "bg-orange-500",
  water: "bg-blue-500",
  bug: "bg-green-500",
  normal: "bg-slate-400",
  poison: "bg-purple-500",
  electric: "bg-yellow-500",
  ground: "bg-amber-950",
  rock: "bg-stone-600",
  fairy: "bg-pink-500",
  dark: "bg-zinc-900",
  dragon: "bg-indigo-700",
  fighting: "bg-yellow-900",
  flying: "bg-cyan-500",
  ghost: "bg-violet-900",
  ice: "bg-sky-300",
  psychic: "bg-fuchsia-500",
  steel: "bg-gray-500",
};

export {
  borderStylePokemonType,
  bgStylePokemonType,
  textColorPokemonType,
  formatTypes,
  bgColorTypeDetails
};
