
import React from 'react';


const Header = () => {
    return (
        <div>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid ms-5">
  
    <a className="navbar-brand" href="/">The Daily Burn</a>
   
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 ms-auto fw-semibold  mb-lg-0">
        <li className="nav-item  ">
          <a className="nav-link active" aria-current="page" href="/">Blog</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;