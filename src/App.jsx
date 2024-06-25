import './App.css'
import { Navbar } from './components/Navbar'
import { Sobre } from './components/Sobre'
import { Course } from './components/Cursos'
import { Intro } from './components/Intro'
import { FAQ } from './components/FAQ'

function App() {
  return (
    <>
      <Navbar/>
      <Sobre/>
      <Intro/>
      <Course/>
      <FAQ />
    </>
  )
}

export default App
