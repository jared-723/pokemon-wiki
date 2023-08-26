import { useState , useEffect} from "react";
import { useSelector } from "react-redux";
import { getAllPokemons, getPokemonsByType  } from "../services/pokemons";

export const usePokedex = () =>{

    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonType, setPokemonType] = useState("");
  
    const { name } = useSelector((store) => store.trainer);
  
    const pokemonByName = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
  
    const handleChange = (setState) => (e) => {
      setState(e.target.value)
      
    }
  
    useEffect(() => {
      if(!pokemonType){
        getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
      }
    }, [pokemonType]);
  
    useEffect(()=>{
      if(pokemonType){
        getPokemonsByType(pokemonType).then((data) => setPokemons(data))
      }
    },[pokemonType])
    return {
        name,
        pokemonName,
        setPokemonName,
    }
}