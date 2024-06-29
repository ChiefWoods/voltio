import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ BrowserRouter,Routes,Route, } from 'react-router-dom'
import {
  Homepage
} from'./pages'


const App=()=>{
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
