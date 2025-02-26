/* eslint-disable react/no-unescaped-entities */
import 'react'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 align-center justify-center text-center p-10 max-w-[800px] w-full mx-auto'>
        <div className='flex flex-col gap-3'>
            <p>IT'S TIME TO GET!!!</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>V-<span className='text-blue-400'>AllFit</span></h1>
        </div>
        <h3>Get your daily workout routine</h3>
        <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
        <button className='bg-slate-950 text-white font-semibold py-4 px-8 rounded border-[2px] border-blue-400 border-solid blueShadow'>
            <p>Accept and Begin</p>
        </button>
    </div>
  )
}

export default Hero