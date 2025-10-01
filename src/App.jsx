import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import Player from './components/player/player'
import About from './pages/about'
import Settings from './pages/home/settings'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
     
    </>
  )
}

export default App
