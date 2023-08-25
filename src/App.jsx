import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import Page404 from './pages/Page404'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:pokemonId' element={<PokemonDetail />} />

        <Route path='*' elemento={<Page404 />}/>
      </Routes>
    </>
  )
}

export default App
