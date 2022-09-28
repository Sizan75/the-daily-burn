import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {name , img , details, time } = props.exercise;
    return (
        
            <div className='row row-cols-4 row-cols-md-4 row-cols-lg-4 g-4'>
                <div className='col'>
            <div className="card ">
             <img src={img} className="img-fluid card-image card-img-top" alt=""/> 
            <div  className="card-body">
           <h5 className="card-title">{name}</h5>
           <p className="card-text">Time Required: {time} mins</p>
           </div>
          </div>
         </div>
    
        </div>
    );
};

export default Exercise;