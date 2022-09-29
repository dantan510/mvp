import React, { useState, useEffect }from 'react';
import Workout from './Workout.js'
const axios = require('axios');

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const getAll = await axios.get('/api/fitness')
      setWorkouts(getAll.data)
    }
    fetchWorkouts()
    console.log('workouts : ', workouts)
  }, [])


  return (
    <div className='workout-log-container'>
      <div id='workout-header'>Workout Log</div>
      <div className='log-container'>
        <div id='workout-status-bar'>
          <div id='status-text'>
            <span>user</span>
            <span>body part</span>
            <span>date</span>
            <span>duration</span>
            <span>intensity</span>
          </div>
        </div>
        <div className='workout-log'>{workouts.map((workout, index) => {
          return <Workout workout={workout} key={index} />
        })}</div>
      </div>
    </div>
  )
}

export default WorkoutLog;