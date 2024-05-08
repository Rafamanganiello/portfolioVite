import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Presentation from './Presentation'
import Blog from './Blog'
import Projects from './Projects'
import Rodape from './Rodape'

function App() {
  return (
    <div className='body'>
      <Navbar/>
      <Presentation/>
      <Blog/>
      <Projects/>
      <Rodape/>
    </div>
  )
}

export default App
