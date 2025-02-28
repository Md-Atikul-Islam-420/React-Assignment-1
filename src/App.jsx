import React from 'react'
import { Button } from '@mui/material'
import './App.css'
import ResponsiveAppBar from './components/nav'
import Hero from './components/Hero'
import Ourpartners from './components/Ourpartners'

function App() {
  

  return (
    <>

    <ResponsiveAppBar/>
    <Hero/>
    <Ourpartners/>
    
    </>
  )
}

export default App
