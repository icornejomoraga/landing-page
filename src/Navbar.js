import React from 'react';

const Navbar = () => {
    return <div> 
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark" id="navbarNav1">
                    <a className="navbar-brand text-white"  id="navbarNav0" href="#"> Navbar</a>

                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav" id="navbarNav">
                            <li className="nav-item active ">
                            <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                            
                        </ul>
                    </div>
                        
                    <button id="boton1" className="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon btn btn-light"></span>
                    </button>
                        
                </nav>
            </div>
            
                


     

    
}


export default Navbar;