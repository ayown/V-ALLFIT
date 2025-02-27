/* eslint-disable react/prop-types */
//parent component for generator.jsx

import 'react'
import PropTypes from 'prop-types'

const SectionWrapper = (props) => {
    const {children,header,title, id} = props
    return (
        <section id={id} className='min-h-screen flex flex-col gap-10 text-center w-full mx-auto'>
            <div className='bg-slate-950 py-10 flex flex-col gap-4 rounded-lg align-center justify-center'>
                <p className='uppercase font-medium'>{header}</p>
                <h2 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-blue-400'>{title[1]}</span> {title[2]}</h2>
            </div>
            <div className='max-w-[800px] w-full mx-auto'>
                {children}
                {/*children components are anything wrapped inside of `SectionWrapper` component*/}
                {/*children is a reserved word in React that refers to anything wrapped inside of a component*/}

            </div>
        </section>
    )
}
SectionWrapper.propTypes = {
    header: PropTypes.string.isRequired,
    title: PropTypes.array,
    children: PropTypes.node.isRequired
}

export default SectionWrapper