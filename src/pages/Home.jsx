import FooterPokeball from "../components/layout/FooterPokeball"

const Home = () => {
    return (
        <main className="min-h-screen grid grid-rows-[1fr_auto]">
            <section>
                <article>
                    <div>
                        <img src="/images/banner.png" alt="" />
                    </div>
                    <h2>Hi, Trainer!</h2>
                    <p>To start, give me your name</p>
                    <form>
                        <input type="text" />
                        <button>Start</button>
                    </form>
                </article>
            </section>
            <FooterPokeball />
        </main>
    )
}
export default Home