import React from 'react';
import { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
//   destuctureing props data 
    const [exercises, setExercises] = useState([]);
    const [activities, setActivities] = useState([]);

    // using useEffect for load data 
    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } ,[])
    // add to list button handler 
   const handleAddToList =(exercise)=>{
    const newActivities = [...activities, exercise];
    setActivities(newActivities);
   }

    return (
        <div className='exercises'>
            <div className='container row row-cols-sm-1 row-cols-md-3 gx-2 gy-4 mt-5'>
           { exercises.map(exercise => <Exercise 
            exercise= {exercise}
            key = {exercise.id}
            handleAddToList={handleAddToList}
            ></Exercise>)}
        </div>
        <div>
            <Activity activities={activities}></Activity>
        </div>
        </div>
    );
};

export default Exercises;