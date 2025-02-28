import React from 'react'
import { Button } from '@mui/material'
import './App.css'
import ResponsiveAppBar from './components/nav'
import Hero from './components/Hero'
import Ourpartners from './components/Ourpartners'
import Control from './components/Control'
import Train from './components/Train'
import Carousel from './components/Carousel'
import image from "./components/image/reacticon.png";
import Allocate from './components/Allocate'
import Embrace from './components/Embrace'
import Footer from './components/Footer'

function App() {
  

  return (
    <>

    <ResponsiveAppBar/>
    <Hero/>
    <Ourpartners/>
    <Control/>
    <Train/>


    <Carousel>
        <div className="bg-black text-white h-64 flex items-center justify-center">
          <div className="text-center">
            <img src={image} className='text-center flex justify-center mx-auto pb-2' alt="" />
            <p className="w-[500px]">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <h1 className="text-[#14BCB2] font-bold pt-3">John Doe</h1>
            <p>Chief Strategy Officer @ Company</p>
          </div>
        </div>
        <div className="bg-blue-200 h-64 flex items-center justify-center">
          Slide 2
        </div>
        <div className="bg-green-200 h-64 flex items-center justify-center">
          Slide 3
        </div>
        
      </Carousel>

      <Allocate/>
      <Embrace/>
      <Footer/>
    
    </>
  )
}

export default App
