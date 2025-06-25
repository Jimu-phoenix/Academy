import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Courses from "./pages/Courses.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Login from './pages/Login.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/courses" element = {<Courses />}></Route>
        <Route path = "/about" element = {<About />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
        <Route path = "/login" element = {<Login />}></Route>


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
