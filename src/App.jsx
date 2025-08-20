import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
