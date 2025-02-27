/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { useState } from 'react'
import { generateWorkout } from './utils/functions'



const App = () => {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goal })
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-b from-gray-800 to-gray-950 text-white text-m m:text-base'>
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App