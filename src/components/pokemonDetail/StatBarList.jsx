import BarProgressStat from "./BarProgressStat"

const StatBarList = ({stats}) => {
  return (
    <section>
        <h2>Stats</h2>
        <section>
            {
                stats?.map((stat) => <BarProgressStat key={stat.name} stat={stat}/>)
            }
        </section>
    </section>
  )
}
export default StatBarList