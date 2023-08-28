import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import Page404 from "./pages/Page404";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <main
      className={`transition-all ${
        darkmode ? "bg-[#171d23]" : "bg-[#e4e4e424]"
      }`}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkmode={darkmode}
              handleDarkmode={handleDarkmode}
            />
          }
        />

        <Route element={<PrivateRoutes />}>
          <Route
            path="/pokedex"
            element={
              <Pokedex
                darkmode={darkmode}
                handleDarkmode={handleDarkmode}
              />
            }
          />
          <Route
            path="/pokedex/:pokemonId"
            element={
              <PokemonDetail
                darkmode={darkmode}
                handleDarkmode={handleDarkmode}
              />
            }
          />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
}

export default App;
