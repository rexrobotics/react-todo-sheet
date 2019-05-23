import React from 'react';
import {Link} from 'react-router-dom'

function NavBar (){
        return ( 
            <nav className="navbar bg-info navbar-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">Todo sheet</a>
                <ul className="navbar-nav ml-auto">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                </ul>
                
            </nav>  
         );
}
 
export default NavBar;