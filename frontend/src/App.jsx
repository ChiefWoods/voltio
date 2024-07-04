import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ BrowserRouter,Routes,Route, } from 'react-router-dom'
import {
  Homepage,
  IndiProject,
  Profile,
  Test,
  Dashboard,
  AllProjects
} from'./pages'


const App=()=>{
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/individualproject" element={<IndiProject/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/allprojects" element={<AllProjects/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
