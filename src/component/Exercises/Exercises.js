import React from 'react';
import { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } ,[])
   const handleAddToList =(exercise)=>{
    const newActivities = [...activities, exercise];
    setActivities(newActivities);
   }

    return (
        <div className='exercises row-cols-sm-12 row'>
            <div className='row row-cols-sm-1 row-cols-md-3 gx-4 gy-4 mt-5'>
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