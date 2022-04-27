import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return(
        <nav className="navbar navbar-light bg-light fixed-top navbar-expand-md">
            <div className="container">
                <a className="navbar-brand px-5" href="/">SH FOOD</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link"  to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <i className="bi bi-search"></i>
                        <i className="bi bi-cart-fill"></i>
                        <i className="bi bi-person-circle"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;