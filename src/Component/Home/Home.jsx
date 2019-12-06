import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  import './Home.css'
export class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Guess Game</h1>
                <ul>
                    <li>
                        <Link to="/"></Link>
                    </li>
                    <li>
                        <Link to="/easy" className="button">Easy</Link>
                    </li>
                    <li>
                        <Link to="/medium" className="button">Medium</Link>
                    </li>
                    <li>
                        <Link to="/hard" className="button">Hard</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
