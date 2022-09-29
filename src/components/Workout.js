import React, { useState, useRef } from 'react';
const axios = require('axios');

const Workout = ({ workout }) => {
  const [user, setUser] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [edit, setEdit] = useState(false);
  const userInput = useRef();
  const userBody = useRef();
  const userDate = useRef();
  const userDuration = useRef();
  const userIntensity = useRef();

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put('/api/fitness' + workout._id, {
      user: user,
      body: body,
      date: date,
      duration: duration,
      intenisty: intensity
    })
      .then(() => {
        setEdit(false);
      })
  }

  const handleDelete = () => {
    axios.delete('/api/fitness' + workout._id)
  }

  const shouldEdit = () => {
    if (edit) {
      const edited =
        <div className='edit-form'>
          <div className='workout-body'>
            <input type='text' ref={userInput} value={workout.user} onChange={(e) => setUser(e.target.value)}></input>
          </div>
          <div className='workout-body'>
            <input type='text' ref={userBody} value={workout.bodyPart} onChange={(e) => setBody(e.target.value)}></input>
          </div>
          <div className='workout-body'>
            <input type='text' ref={userDate} value={workout.date.slice(0, 10)} onChange={(e) => setDate(e.target.value)}></input>
          </div>
          <div className='workout-body'>
            <input type='text' ref={userDuration} value={workout.duration} onChange={(e) => setDuration(e.target.value)}></input>
          </div>
          <div className='workout-body'>
            <input type='text' ref={userIntensity} value={workout.intensity} onChange={(e) => setIntensity(e.target.value)}></input>
          </div>
        </div>
      return edited
    } else {
      const noEdit =
        <div className='edit-form'>
          <div className='workout-body'>
            {workout.user}
          </div>
          <div className='workout-body'>
            {workout.bodyPart}
          </div>
          <div className='workout-body'>
            {workout.date.slice(0, 10)}
          </div>
          <div className='workout-body'>
            {workout.duration}
          </div>
          <div className='workout-body'>
            {workout.intensity}
          </div>
        </div>
      return noEdit
    }
  }

  const createButtons = () => {
    if (!edit) {
      return <div className='button-container'>
        <button onClick={() => setEdit(true)}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    } else {
      return <div className='button-container'>
        <form onSubmit={(e) => handleUpdate(e)} id='button-edit'>
          <button>submit</button>
        </form>
        <button onClick={handleDelete}>delete</button>
      </div>
    }
  }
  return (
    <div className='workout-card'>
      {shouldEdit()}
      {createButtons()}
    </div>
  )
}

export default Workout;