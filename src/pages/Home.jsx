import FooterPokeball from "../components/layout/FooterPokeball"

const Home = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const inputValue = e.target.name.value.trim();

      if (inputValue.length !== 0) {
        dispatch(setNameTrainer(inputValue));
        navigate("/pokedex");
      }
      e.target.name.value = "";
    };

    return (
      <main className="min-h-screen grid grid-rows-[1fr_auto]">
        <section className="">
          <article className="gap-[2rem] h-[80%] flex flex-col justify-center items-center">
            <div className="">
              <img
                className=" sm:w-[400px] md:w-[600px] lg:w-[700px] w-[300px]"
                src="/images/banner.png"
                alt=""
              />
            </div>
            <div className="text-center flex flex-col">
              <h2 className=" lg:text-4xl font-bold  text-[#FE1936] text-2xl">
                ¡Hello Trainer!
              </h2>
              <p>To start, give me your name</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="shadow-md py-[8px] px-2"
                autoComplete="off"
                placeholder="Enter your name..."
                id="nameTrainer"
                type="text"
                required
              />
              <button className="bg-[#D93F3F] py-[8px] w-[100px] text-white">
                Start
              </button>
            </form>
          </article>
        </section>
        <FooterPokeball />
      </main>
    );
}
export default Home