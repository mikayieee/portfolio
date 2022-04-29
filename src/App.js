import React from "react"

import Main from "./Components/Main"
import About from "./Components/about"
import Contact from "./Components/contact"


export default function App() {
    return (
        <div className="container">
             <Main />
            <About/>
            <Contact />

        </div>
    )
}