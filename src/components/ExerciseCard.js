import React from 'react';

const ExerciseCard = ({ exercise }) => {
  console.log('exerciseCard : ', exercise)

  return (
    <div className='exercise-card-container'>
      <div className='exercise-card'>
        <img src={exercise.gifUrl} alt={exercise.name} />
        <div className='exercise-name'>{exercise.name}</div>
      </div>
    </div>
  )
}

export default ExerciseCard;