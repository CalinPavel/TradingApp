import React, { useState } from "react";
import {NavLink } from "react-router-dom";

export function Dashboard() {
    var [counter, setCounter] = useState(0);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4">
                <a className="navbar-brand" href="#">TradeApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to = '/login' className="nav-link" >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = '/register' className="nav-link" >Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = '/fxTrades' className="nav-link" >Trades</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}