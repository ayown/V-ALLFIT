/* eslint-disable react/prop-types */
import 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

const Workout = (props) => {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}

export default Workout