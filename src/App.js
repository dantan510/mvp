import React from 'react';
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import WorkoutLog from './components/WorkoutLog.js'
import WorkoutEntry from './components/WorkoutEntry.js'



const App = () => {
  // const [page, setPage] = useState(false)
  return (
    <div>
      <div className='app-container'>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/log' element={<WorkoutLog />} />
          <Route path='/entry' element={<WorkoutEntry />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
