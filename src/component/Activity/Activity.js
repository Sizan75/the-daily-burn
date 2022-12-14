import React, { useEffect, useState } from 'react';
import './Activity.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import person from '../../image/people.jpg';



const Activity = (props) => {
    // desturctreing props 
    const { activities } = props;
    const [breakTime, setBreakTime] = useState();

    // breack seting function 
    const addABreak = (rest ) => {
        
        const restTime = rest;
        setBreakTime(restTime);
        localStorage.setItem("breakTime", restTime);
        
    }

// get data from local Storage 
    useEffect(() => {
        const getBreackTime = localStorage.getItem('breakTime');
        setBreakTime(getBreackTime);
    }, [])
// calcuate exercise time
    let time = 0;
    for (const exercise of activities) {
        time = time + exercise.time;
    }
    
//  Toast for activity completed button
    const notify = () => toast.success(' Congratulations! Exercise Completed', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    return (
        <div className='.bg-light  container mt-5 pt-4 activity'>
            <div className='d-flex align-items-center justify-content-center mb-5'>
                <img src={person} className='align-left img-fluid person rounded-circle' alt="" />
                <div className=''>
                    <h6>MD.SAKI-UZ-ZAMAN</h6>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='d-flex justify-content-between info-section p-2 '>

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
{/* break button  */}
                <button onClick={() => addABreak(10)} className='rounded-circle  btn btn-primary me-2'>10</button>
                <button  onClick={() => addABreak(15)} className='rounded-circle btn btn-primary me-2'>15</button>
                <button  onClick={() => addABreak(20)} className='rounded-circle btn btn-primary me-2'>20</button>
                <button  onClick={() => addABreak(25)} className='rounded-circle btn btn-primary me-2'>25</button>
                <button  onClick={() => addABreak(30)} className='rounded-circle btn btn-primary me-2'>30</button>
            </div>



            <div className='mt-5 pt-5 pb-4 align-left info-section'>
                {/* Total exercise time  */}
                <h5 className='mb-4'>Exercise Time: {time} minutes</h5>
{/* Showing Break Time  */}
                <h5 className='mb-5'>Break Time: {breakTime} minutes</h5>
{/* button for activity completed */}
                <button onClick={notify} className='btn btn-warning w-100 btn-activity'>Activity Completed</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>


        </div>
    );
};

export default Activity;