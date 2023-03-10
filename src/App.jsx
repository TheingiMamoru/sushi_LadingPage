import React from 'react'
import NavBar from './components/NavBar'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import NewsLetter from './pages/NewsLetter'
import Popular from './pages/Popular'
import Recently from './pages/Recently'

const App = () => {
  return (
    //bg-color => didn't work
    <div className='bg-bodyCol m-0 p-0'>  
      <div className='container max-w-screen-lg mx-auto'>
        <NavBar/>
        <Home/>
        <AboutUs/>
        <Popular/>
        <Recently/>
        <NewsLetter/>
      </div>
    </div>
  )
}

export default App