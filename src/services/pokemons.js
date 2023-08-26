import axios from "axios"

export const getAllPokemons = async () => {
    //Por ahora lo ejamos asi, solo trae 2o pokemons
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=20"
    const {data} = await axios.get(URL);
    return data.results
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

const formatStats = (stats) =>{
    stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat
    }))
}

const formatTypes = (types) =>{
    return types.map((type) => type.type.name)
}
