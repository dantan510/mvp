import ExerciseCard from './ExerciseCard'

import React, { useState, useEffect } from 'react';
import { options, getExercises } from '../request.js'

const Exercises = ({ exercises }) => {
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const exercisesData = await getExercises('https://exercisedb.p.rapidapi.com/exercises', options)
      const randomExercises = [];
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 1327)
        randomExercises.push(exercisesData[index])
      }
      setInitial(randomExercises)
    }
    fetchData()
    // console.log('initial : :', initial);
  }, [])

  // console.log('exercises component : ', initial);
  return (
    <div className='exercises-container'>
      { exercises.length !== 0 ?
        (exercises.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} key={index}/>
        }))
        :
        (
        initial.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} key={index}/>
        })
        )
      }
    </div>
  )
}

export default Exercises;