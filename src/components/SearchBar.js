import React, { useState } from 'react';
import { options, getExercises } from '../request.js'

const SearchBar = ({ setExercises }) => {

  const [input, setInput] = useState(null)


  const handleSearch = async () => {
    if (input) {
      const exercisesData = await getExercises('https://exercisedb.p.rapidapi.com/exercises', options)
      const searchedExercises = [];
      for (let i = 0; i < exercisesData.length; i++) {
        if (exercisesData[i].bodyPart.toLowerCase().includes(input)) {
          searchedExercises.push(exercisesData[i])
        }
      }
      // console.log('search : ', searchedExercises)
      setInput('')
      setExercises(searchedExercises.slice(0, 6))
    }
  }


  return (
    <div className='search-container'>
      <div id='search-text'>Search for new exercises {<br />} to try on your next workout!</div>
      <div id='search-bar'>
        <input id='search-input' type='text' placeholder='Search exercises by body parts...' onChange={(e) => setInput(e.target.value.toLowerCase())}></input>
        <button id='search-button' onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar;