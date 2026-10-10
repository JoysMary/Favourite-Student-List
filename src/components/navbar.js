import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>🎓Favourite Student List </h2>

            <div>
                <Link to="/">Student List</Link>
            </div>
            <div>
                <Link to="/favourite">Favourite Students</Link>
            </div>
        </nav>
    );
}

export default Navbar;