

const StatsList = ({ stats }) => {
  return (
    <ul>
      {stats?.map((stat) => (
        <li key={stat.name}>
          <h4>{stat.name}</h4>
          <span>{stat.value}</span>
        </li>
      ))}
    </ul>
  );
};
export default StatsList;
