import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Header.css';

class Header extends Component {
    render(){
        return (
            <div className="navbar navbar-inverse navbar-static-top" id="nav">
                <div className="navbar-header">

                    <div className="collapse navbar-collapse">
                        <div className="navbar-brand">Nice Recruiter</div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/about">About</Link>
                            </li>   
                            <li>
                                <Link to="/companies">Companies</Link>
                            </li>    
                            <li>
                                <Link to="">Email</Link>
                            </li>                             

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header