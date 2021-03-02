import React from 'react';
import logo from '../images/images.jpg'

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <a className="navbar-brand" href="#">
                        <img width={"80px"} src={logo} alt="" />
                    </a>
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Other players</a>
                    <a className="nav-link" href="#">Contact</a>

                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Header;