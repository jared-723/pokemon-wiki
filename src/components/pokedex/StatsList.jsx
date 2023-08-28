import { textColorPokemonType } from "../../services/pokemons";


const StatsList = ({ stats ,type, darkmode}) => {
  return (
    <ul className="grid gap-2 grid-cols-3 text-xs p-2">
      {stats?.map((stat) => (
        <li key={stat.name}>
          <h4 className={`capitalize line-clamp-1 ${darkmode ? 'text-white' : 'text-black'} `}>{stat.name}</h4>
          <span className={`font-bold ${textColorPokemonType[type]}`}>{stat.value}</span>
        </li>
      ))}
    </ul>
  );
};
export default StatsList;
