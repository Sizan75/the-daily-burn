import React from 'react';

const Blogs = () => {
    return (
    <div>

<div id='blogs' className='container mt-5 mb-4'>
        <h3>Question 1: How does React work?</h3>
        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.It's possible to have as many components as necessary without cluttering your code.</p>    
        </div>
        <div className='container mt-5 mb-4'>
        <h3>Question 2:What are the difference between props and state?</h3>
        <p>In props  data is passed from one component to another.And in state data is passed within the component only.props is Immutable (cannot be modified).State is Mutable ( can be modified).Props are read-only. State is both read and write. </p>    
        </div>
        <div className='container mt-5 mb-4'>
        <h3>Question 3:What does useEffect() do in react?</h3>
        <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. </p>    
        </div>
    </div>
    );
};

export default Blogs;