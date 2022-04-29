import React from "react"
import reactLogo from "./react_logo.png"

export default function Header(){
    return(
        <header>
            <nav className = "nav">
                <img src={reactLogo} className= "nav_logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
    
}