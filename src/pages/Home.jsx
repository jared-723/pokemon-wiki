import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex")
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article className="gap-[2rem] h-[80%] flex flex-col justify-center items-center">
          <div>
            <img 
            src="/images/banner.png" alt="" />
          </div>
          <h2 className=" lg:text-4xl font-bold  text-[#FE1936] text-2xl">Hi, Trainer!</h2>
          <p>To start, give me your name</p>
          <form onSubmit={handleSubmit}>
            <input
              className="shadow-md py-[8px] px-2"
              autoComplete="off"
              id="nameTrainer"
              type="text"
              placeholder="Your Name..."
              required
            />
            <button className="bg-[#D93F3F] py-[8px] w-[100px] text-white">Start</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;
