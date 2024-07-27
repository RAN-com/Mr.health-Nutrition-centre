import React, { useRef,useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import PhotoHoverSlide from './Components/PhotoHoverText/PhotoHoverText'
import FlexTwoColumnLayout from './Components/FlexTwoColumnLayout/FlexTwoColumnLayout'
import FlexTwoColumnLayou from './Components/Contectus/Content'

import Footer from './Components/Footer/Footer'
import PathInput from './Components/path/path'
import Cards from './Components/Card/Cards'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Result from './Components/Result/Results'
import Results from './Components/Result/Result'
import Aboutpage from './Components/Result/Aboutpage'
import Scroll from './Components/scroll/Scroll'
import Content from './Components/scroll/Content'
import Test from './Components/Footer/Test'
import Tabs from './Components/Tab/Tabs'
import GenderSelection from './Components/Tab/Tabs'


import Tab from './Components/Tab/Tab'
import HexagonButton from './Components/Tab/Ta'

function App() {
  const scrollRef = useRef(null);
  const [count, setCount] = useState(0)

  return (
  <div >
      <Navbar /> 
       <Hero/> 
     <br/>
       <header className="App-header p-10 justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4 ">Photo </h1>
        <PhotoHoverSlide />
      </header> 
      <header className="App-header p-10 justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4 ">About Us</h1>
        <FlexTwoColumnLayout/>
      </header>
     
       
      <Scroll/>
   
      {/* <Tab/> */}
       <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Flex Two Column Layout Example with Form and US Map</h1>
        <FlexTwoColumnLayou />
      </header>
     <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Photo Gallery Example</h1>
        <Test/>
      </header>
   
      <Footer/> 
      
    

      
   
           
    </div>
  )
}

export default App
