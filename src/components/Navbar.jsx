import React from "react";
import '../App';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-heading">
                <h1> CarLovers</h1>
                </div>
           
                <Link to="/">Početna</Link>
                 <div>
                    <Link to="about">O nama</Link>
                 </div>
                 <div>
                <Link to="/favorites">
                Tvoji omiljeni automobili</Link>
                 </div>

                 
        </div>
    );
};

export default Navbar