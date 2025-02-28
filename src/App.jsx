import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Shorter from './components/Shorter'
import Shortel from './components/Shortel'
import Statistics from './components/Statistics'
import Boost from './components/Boost'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Shorter />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  )
}

export default App
