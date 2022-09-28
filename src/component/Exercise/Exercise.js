import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {handleAddToList , exercise} =props
    const { name, img, time , details} =exercise;
    return (


        <div className='col'>
            <div className="card">
                <img src={img}  alt="" />
                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                   <p className='align-left'><small >{details}</small></p>
                    <p className='card-text fw-bold mb-2 align-left'>Time Required: {time} mins</p>
                </div>
                <button onClick={()=>handleAddToList(exercise)} className='btn btn-primary mt-auto w-100'>
                    Add to List
                </button>
            </div>

        </div>
    );
};

export default Exercise;