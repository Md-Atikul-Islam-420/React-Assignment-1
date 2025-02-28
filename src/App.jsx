import React from 'react'
import { Button } from '@mui/material'
import './App.css'
import ResponsiveAppBar from './components/nav'
import Hero from './components/Hero'
import Ourpartners from './components/Ourpartners'
import Control from './components/Control'
import Train from './components/Train'

function App() {
  

  return (
    <>

    <ResponsiveAppBar/>
    <Hero/>
    <Ourpartners/>
    <Control/>
    <Train/>
    
    </>
  )
}

export default App
