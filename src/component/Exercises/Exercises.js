import React from 'react';
import { useState, useEffect } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } ,[])

    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 gx-4 gy-4 mt-5'>
           { exercises.map(exercise => <Exercise 
            exercise= {exercise}
            key = {exercise.id}
            ></Exercise>)}
        </div>
        </div>
    );
};

export default Exercises;