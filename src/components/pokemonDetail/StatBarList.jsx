import BarProgressStat from "./BarProgressStat";

const StatBarList = ({ stats, darkmode }) => {
  return (
    <section>
      <section className="flex items-center gap-2">
        <h2 className={`font-bold ${darkmode ? 'text-white' : 'text-black'} `}>Stats</h2>
        <hr className="w-full"/>
      </section>
      <section>
        {stats?.map((stat) => (
          <BarProgressStat key={stat.name} stat={stat} darkmode={darkmode} />
        ))}
      </section>
    </section>
  );
};
export default StatBarList;
