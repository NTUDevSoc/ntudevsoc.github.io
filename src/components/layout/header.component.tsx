import { Link } from "gatsby";
import React, { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">

            </div>
            <div className="navbar-right">
                <Link to="/home">Home</Link>
            </div>
        </nav>
    );
};