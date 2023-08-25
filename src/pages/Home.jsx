import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";

const Home = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article>
          <div>
            <img src="/images/banner.png" alt="" />
          </div>
          <h2>Hi, Trainer!</h2>
          <p>To start, give me your name</p>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              id="nameTrainer"
              type="text"
              placeholder="Your Name..."
              required
            />
            <button>Start</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;
