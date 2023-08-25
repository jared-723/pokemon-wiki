import axios from "axios"

export const getAllPokemons = async () => {
    //Por ahora lo ejamos asi, solo trae 2o pokemons
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=20"
    const {data} = await axios.get(URL);
    return data.results
}

export const getPokemonByUrl = async (pokemonUrl) =>{
    const {data} = await axios.get(pokemonUrl);
    return data
}