/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

//child component of sectionWrapper.jsx
//im passing in the header, title and description as props to the header component

import 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/soldier'
import { useState } from 'react'
import Button from './Button'

const Header = (props) => {
    const {index,title,description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-m sm:text-base mx-auto py-3'>{description}</p>
        </div>
    )
}

const Generator = () => {

    const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props
    const [showModal, setShowModal] = useState(false)

    // let showModal = false

    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 3) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 3) {
            setShowModal(false)
        }

    }

    return (
        <SectionWrapper header={'Generate your workout'} title={['It\'s','Huge','o\'clock']}>
            {/* ye jaara sectionWrapper function mei as a prop*/}
            <Header index={'01'} title={'Pick your poison'} description={'Select the type of workout you want to do.'} /> 
            {/* ye jaara header function mei */}

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
                <br />
            </div>

            <Header index={'02'} title={['Lock on targets']} description={'Select the muscles judged for annihilation.'} />
            <div className='bg-slate-950 p-3 border-solid border-blue-400 border-[2px] rounded-lg w-full mx-auto text-left flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={'bg-slate-950 border  duration-200 hover:border-blue-600 py-3 rounded-lg px-4 ' + (scheme === goal ? ' border-blue-600' : ' border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>
    )
}

export default Generator