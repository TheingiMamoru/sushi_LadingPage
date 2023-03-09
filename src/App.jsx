import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'

const App = () => {
  return (
    //bg-color => didn't work
    <div className='bg-bodyCol m-0 p-0'>  
      <div className='max-w-screen-lg mx-auto'>
        <NavBar/>
        <Home/>
      </div>
    </div>
  )
}

export default App