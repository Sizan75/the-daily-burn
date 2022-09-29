import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid ms-5">
  
    <a className="navbar-brand fw-semibold" href="/"> <FontAwesomeIcon icon={faDumbbell} /> The Daily Burn</a>
   
    
  </div>
</nav>
        </div>
    );
};

export default Header;