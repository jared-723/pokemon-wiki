import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = ({ setDarkmode, darkmode, handleDarkmode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article className="gap-[2rem] h-[80%] my-[50px] flex flex-col justify-center items-center">
          <div className="w-[80%]">
            <img src="/images/banner.png" alt="" />
          </div>
          <h2 className={` lg:text-4xl font-bold  text-2xl ${darkmode ? 'text-[#ffc125]' : 'text-[#FE1936]'} `}>
            Hi, Trainer!
          </h2>
          <p className={`${darkmode ? "text-white" : "text-black"}`}>
            To start, give me your name
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className={`shadow-md py-[8px] px-2 ${
                darkmode
                  ? " bg-[#272c34] text-white"
                  : " text-black"
              }`}
              autoComplete="off"
              id="nameTrainer"
              type="text"
              placeholder="Your Name..."
              required
            />
            <button className={`py-[8px] w-[100px] font-bold text-white ${darkmode ? 'bg-[#ffc125]' : 'bg-[#D93F3F]'} `}>
              Start
            </button>
          </form>
          <div
            onClick={handleDarkmode}
            className={`h-[30px] w-[55px] border-2 rounded-full px-[3px] py-[2px] flex items-center cursor-pointer transition-all after:block after:content-[''] after:h-[20px] after:w-[20px] after:rounded-full ${
              darkmode
                ? "after:bg-white border-white justify-end"
                : "after:bg-[#DD1A1A] border-[#DD1A1A] justify-start"
            }`}
          ></div>
        </article>
      </section>
      <FooterPokeball darkmode={darkmode} />
    </main>
  );
};
export default Home;
