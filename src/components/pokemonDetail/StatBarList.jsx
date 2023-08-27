import BarProgressStat from "./BarProgressStat";

const StatBarList = ({ stats }) => {
  return (
    <section>
      <section className="flex items-center gap-2">
        <h2 className="font-bold">Stats</h2>
        <hr className="w-full"/>
      </section>
      <section>
        {stats?.map((stat) => (
          <BarProgressStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};
export default StatBarList;
