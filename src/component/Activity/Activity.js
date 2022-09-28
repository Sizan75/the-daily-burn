import React from 'react';
import './Activity.css';
import person from '../../image/people.jpg';

const Activity = (props) => {
    const { activities } = props;

    let time = 0;
    for (const exercise of activities) {
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
            <div className='d-flex justify-content-between p-2 '>

                <div>
                    <h4>65 <small>kg</small></h4>
                    <p className='fw-semibold'>Weight</p>
                </div>
                <div>
                    <h4>5.5</h4>
                    <p className='fw-semibold'>Height</p>
                </div>
                <div>
                    <h4>25 <small>yrs</small></h4>
                    <p className='fw-semibold'>Age</p>
                </div>
            </div>

            <div>
                <h4 className='align-left mb-3'>Add A Break </h4>

                <button className='rounded-circle btn btn-primary me-2'>10</button>
                <button className='rounded-circle btn btn-primary me-2'>15</button>
                <button className='rounded-circle btn btn-primary me-2'>20</button>
                <button className='rounded-circle btn btn-primary me-2'>25</button>
                <button className='rounded-circle btn btn-primary me-2'>30</button>
            </div>



            <div className='mt-5 align-left'>
                <h5 className='mb-4'>Exercise Time: {time}</h5>

                <h5 className='mb-4'>Break Time:  </h5>

                <button className='btn btn-warning w-100'>Activity Completed</button>
            </div>


        </div>
    );
};

export default Activity;