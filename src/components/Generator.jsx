/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

//child component of sectionWrapper.jsx
//im passing in the header, title and description as props to the header component

import 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/soldier'

const Header = (props) => {
    const {index,title,description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-m sm:text-base mx-auto py-4'>{description}</p>
        </div>
    )
}

const Generator = () => {
  return (
    <SectionWrapper header={'Generate your workout'} title={['It\'s','Huge','o\'clock']}>
        {/* ye jaara sectionWrapper function mei as a prop*/}
        <Header index={'01'} title={'Pick your poison'} description={'Select the type of workout you want to do.'} /> 
        {/* ye jaara header function mei */}

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {Object.keys(WORKOUTS).map((type,typeIndex) => {
                return (
                    <>
                        <button className='bg-slate-950 text-white font-semibold py-3 text-center rounded-lg border-[2px] duration:200 hover:border-blue-600 border-blue-400 border-solid' key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_',' ')}</p>
                        </button>
                    </>
                )
            })}
            <br />
        </div>
        <Header index={'02'} title={['Lock ON targets']} description={'Select the muscles judged for annihilation.'} />
        <div className='bg-slate-950 p-3 border-solid border-blue-400 border-[2px] rounded-lg w-full mx-auto text-left'>
            <div className='relative flex items-center justify-between gap-4'>
                <p>Select Muscle Groups</p>
                <i class="fa-solid absolute right-3 top-0.5m-translate-y-0.5 fa-caret-down"></i>
            </div>
        </div>
    </SectionWrapper>
  )
}

export default Generator