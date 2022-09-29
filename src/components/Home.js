import React, { useState } from 'react';

import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Exercises from './Exercises.js'

const Home = () => {
  const [exercises, setExercises] = useState([])
  // console.log('exe : ', exercises);
  return (
    <div>
      <Header/>
      <SearchBar setExercises={setExercises}/>
      <Exercises exercises={exercises}/>
    </div>
  )
}

export default Home;