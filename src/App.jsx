import { Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Router path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
