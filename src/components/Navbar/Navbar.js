import React from "react";
import './Navbar_style.css';

export default function Navbar(props) {
    
    return (
        <nav className={`nav_container ${props.mode}`}>
            <div className="left">
                <ul>
                    <li ><a style = {{color : props.mode === 'dark' ? 'white' : 'black'}} href="/">Home</a></li>
                    <li ><a style = {{color : props.mode === 'dark' ? 'white' : 'black'}} href="/">{props.about}</a></li>
                    <li ><a style = {{color : props.mode === 'dark' ? 'white' : 'black'}} href ="/">{props.service}</a></li>
                    <li ><a style = {{color : props.mode === 'dark' ? 'white' : 'black'}} href ="/">{props.contact}</a></li>
                </ul>
            </div>

            <div className = "right">
                <button onClick = {props.toggleMode}  id = "btn" type = 'button'>{props.mode === "dark" ? "Light Mode" : "Dark Mode"}</button>
            </div>
        </nav>
    )
}


Navbar.defaultProps = {
    title: "Set title here",
    about: "About",
    service : "Service",
    contact : "Contact"
}