import React from 'react'
import { Button } from '@mui/material'
import './App.css'
import ResponsiveAppBar from './components/nav'
import Hero from './components/Hero'
import Ourpartners from './components/Ourpartners'
import Control from './components/Control'

function App() {
  

  return (
    <>

    <ResponsiveAppBar/>
    <Hero/>
    <Ourpartners/>
    <Control/>
    
    </>
  )
}

export default App
