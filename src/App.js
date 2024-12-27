import React from 'react'
import './App.css'
import {Cta,Navbar} from './components/index'
import {Features,Footer,Header,Possibility,WhatUHI,Patient, Contact} from './container/index'
import {Login, SignUp} from './components/index'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

const App = () => {
  return (

    <Router>
      <Routes>
      <Route path = "/" element={<div className='App'>
          <div className="gradient__bg">
            <Navbar/>
            <Header/>
          </div>
          <WhatUHI/>
          <Features/>
          <Cta/>
          <Possibility/>
          <Patient/>
          <Contact/>
          <Footer/>
      </div>}/>
      <Route path="/login" element={<Login />} />
      <Route path = "/signup" element={<SignUp />}/>
      </Routes>
    </Router>
  )
}

export default App