const BarProgressStat = ({ stat, darkmode }) => {

    const getPercentBarProgress = (statValue) => {
        const MAX_STAT_VALUE = 255;
        const percent = (100 * statValue) / MAX_STAT_VALUE
        return `${percent}%`
    }

  return (
    <article>
      <section className={`flex justify-between px-2 ${darkmode ? 'text-white' : 'text-black'}`}>
        <h5 className="font-semibold">{stat.name}</h5>
        <span className="font-semibold">{stat.value}/255</span>
      </section>
      <div style = {{width: getPercentBarProgress(stat.value)}} className="h-6 bg-slate-500 rounded-md">
        <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
      </div>
    </article>
  );
};
export default BarProgressStat;
