import React from "react";


export default function SkillsPage(props){
    return(
        <div className="flex-box">
                            <img src={props.img} className="skills" />
                            <h4>{props.title}</h4>
                            <p>{props.description}</p>      
        </div>  
    )
}