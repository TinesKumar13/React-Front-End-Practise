import React from 'react'
import Navbar from './components/Navbar'
import First from './section/First'
import Footer from './section/Footer'
import Second from './section/Second'
import Third from './section/Third'

const App = () => {
  return (
    <div>
      <Navbar/>
      <First/>
      <Second/>
      <Third/>
      <Footer/>
    </div>
  )
}

export default App
