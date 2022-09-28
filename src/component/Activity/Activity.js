import React from 'react';
import './Activity.css';
import person from '../../image/people.jpg';

const Activity = (props) => {
    const {activities} = props;

    let time= 0 ;
    for(const exercise of activities){
        time = time + exercise.time;
        console.log(exercise.time) 
    }
    return (
        <div className='.bg-light  mt-5 pt-4 activity'>
            <div className='d-flex align-items-center justify-content-center mb-5'>
                <img src={person} className='img-fluid person rounded-circle' alt="" />
            <div className=''>
                <h6>MD.SAKI-UZ-ZAMAN</h6>
                <p>Dhaka,Bangladesh</p>
            </div>
            </div>
            
            <h5>Exercise Time: {time}</h5>

            <h5>Break Time:  </h5>

        </div>
    );
};

export default Activity;