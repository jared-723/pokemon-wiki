import axios from "axios"

export const getAllPokemons = async () => {
    //Por ahora lo ejamos asi, solo trae 2o pokemons
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=20"
    const {data} = await axios.get(URL);
    return data.results
}

export const getPokemonsByType = async (pokemonType) => {
    const url = `https://pokeapi.co/api/v2/type/${pokemonType}`
    const {data} = await axios.get(url);
    const formatPokemons = data.pokemon.map(({pokemon}) => pokemon)
    return formatPokemons
}

export const getPokemonByUrl = async (pokemonUrl) =>{
    const {data} = await axios.get(pokemonUrl);

    const dataPokemon = {
        id: data.id,
        name: data.name,
        types: formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default
    }

    return dataPokemon;
}

export const getPokemonById = async (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

    const {data} = await axios.get(url);

    const dataPokemon = {
        id: data.id,
        name: data.name,
        types: formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default,
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        moves: data.moves
    }
    return dataPokemon
}

const formatStats = (stats) =>{
    return stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat
    }))
}

const formatTypes = (types) =>{
    return types.map((type) => type.type.name)
}

export const joinPokemonTypes = (types = []) =>{
    return types.slice(0,2).join(" / ")
}

const borderStylePokemonType = {
    grass: "border-[5px] border-green-500",
    fire: "border-[5px] border-orange-500"
  }

  const bgStylePokemonType = {
    grass: "bg-gradient-to-b from-green-500 to-green-300",
    fire: "bg-gradient-to-b from-orange-500 to-orange-300"
  }

  export{
    borderStylePokemonType,
    bgStylePokemonType
  }
