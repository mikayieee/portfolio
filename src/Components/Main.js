import React from "react"
import picture from "./picture.jpg"

export default function Main(){
    return(
        <div className="body-content">
            <div className ="body-text">
                <p className="body-title">I'M MICAELA POLICARPIO</p>
                <p>An inquisitive and great team player looking for a challenging position.  
                    Using my technical skills, working knowledge of software development,  
                    and excellent communication skills to grow while making a significant contribution to the success of the company.</p>
                    <button className="learn-button">Learn More..</button>
            </div>
            <div className="Logo">
                <img src={picture} className="main-picture"></img>
            </div>
        </div>
    )
}

