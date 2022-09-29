import React, { useState } from 'react';
const axios = require('axios');

const WorkoutEntry = () => {
  const [user, setUser] = useState('')
  const [bodyPart, setBodyPart] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [intensity, setIntensity] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/fitness', {
      user: user,
      bodyPart: bodyPart,
      date: date,
      duration: duration,
      intensity: intensity
    })
    alert('success!')
  }

  // add input validation
  return (
    <div className='workout-entry-container'>

      <div className='entry-container'>

        <form onSubmit={handleSubmit}>
          <div className='logger'>
            User:
            <input type='text' placeholder='your name...' onChange={(e) => setUser(e.target.value)} required></input>
          </div>

          <div className='logger'>
            Body Part:
            <input type='text' placeholder='body part exercised...' onChange={(e) => setBodyPart(e.target.value)} required></input>
          </div>

          <div className='logger'>
            Date:
            <input type='text' placeholder='date...' onChange={(e) => setDate(e.target.value)} required></input>
          </div>

          <div className='logger'>
            Duration:
            <input type='number' placeholder='length of workout...' onChange={(e) => setDuration(e.target.value)} required></input>
          </div>

          <div className='logger'>
            Intensity:
            <input type='text' placeholder='intensity' onChange={(e) => setIntensity(e.target.value)} required></input>
          </div>

          <div className='logger' id='notes-log'>
            Notes
            <input type='text'></input>
          </div>
          <button>submit</button>
        </form>

      </div>

    </div>
  )
}

export default WorkoutEntry;