/* eslint-disable react/no-unescaped-entities */
import 'react'
import  Button  from './Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 align-center justify-center text-center p-10 max-w-[800px] w-full mx-auto'>
        <div className='flex flex-col gap-3'>
          
          <p className='text-1xl'>IT'S TIME TO GET!!!</p>
          <div className='flex justify-center gap-2'>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>V-<span className='text-blue-400'>AllFit</span></h1>
            <img src='https://img.icons8.com/ios/50/000000/dumbbell--v1.png' alt='dumbbell icon' className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
          </div>

        </div>
        <h2 className='text-2xl'>Get your daily workout routine</h2>
        <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
        <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
    </div>
  )
}

export default Hero