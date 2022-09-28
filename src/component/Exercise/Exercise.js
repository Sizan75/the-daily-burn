import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { name, img, time , details} = props.exercise;
    return (


        <div className='col'>
            <div className="card">
                <img src={img}  alt="" />
                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                   <p><small>{details}</small></p>
                    <p className='card-text fw-bold mb-2'>Time Required: {time} mins</p>
                </div>
                <button className='btn btn-primary mt-auto w-100'>
                    <p>Add to List</p>
                </button>
            </div>

        </div>
    );
};

export default Exercise;