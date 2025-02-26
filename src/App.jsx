import 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'

const App = () => {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-b from-gray-800 to-gray-950 text-white text-m m:text-base'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App