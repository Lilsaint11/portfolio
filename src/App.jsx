import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './about'
import Contact from './contact'
import CurvedBg from './curved-bg'
import Footer from './footer'
import Header from './header'
import Intro from './intro'
import Projects from './projects'


function App() {

  return (
    <Router>
      <div className=" flex flex-col justify-between h-screen pt-5 gap-10">
        <Header />
        <Routes>
          <Route exact path = "/" element={
            <React.Fragment>
              <Intro />
              <CurvedBg /> 
            </React.Fragment>
          }/>
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/contact" element={
            <React.Fragment>
              <Contact />
              <CurvedBg /> 
            </React.Fragment>
          }/>
          <Route path = "/about" element={
           <React.Fragment>
            <About />
            <CurvedBg /> 
           </React.Fragment>
          }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
