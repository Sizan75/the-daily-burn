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
            <div>
           { exercises.map(exercise => <Exercise 
            exercise= {exercise}
            key = {exercise.id}
            ></Exercise>)}
        </div>
        </div>
    );
};

export default Exercises;