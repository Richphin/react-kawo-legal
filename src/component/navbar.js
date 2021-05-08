import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div >
            <div className={props.class} >
            <a className="navbar-brand logo" href="#"><img src="images/unnamed1.png" className="logo"/></a>
			<ul className="nav navbar-nav navbar-right topbtn">
			        <li className={props.homeactive}><Link to="/">Home</Link></li>
			        <li className={props.startupactive}><Link to="/Startup">Startups</Link></li>
			        <li className={props.registeractive}><Link to="/Register">Register</Link></li>
			        <li className={props.loginactive}><Link to="/Login">Login</Link></li>
			</ul>
        </div>
        </div>
        
    )
}
