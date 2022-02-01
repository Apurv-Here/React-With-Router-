import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Router</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home </a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
    );
};

export default Navbar;
