import React from "react"
import address from "./address.png"
import email from "./email.png"
import contact from "./contact.png"
import facebook from "./facebook.png"

export default function ContactPage(){
    return(
        <div className="contact-body">
            <h3>Contact</h3>
            <div className="flex-container">
                        <div className="flex-box"><img src={address } className="icon-img"></img>
                        <p>Lambakin, Marilao, Bulacan</p>
                        </div>
                        <div className="flex-box"><img src={email} className="icon-img"></img>
                        <p>micaela.policarpio8@gmail.com</p></div>
                        <div className="flex-box"><img src={contact} className="icon-img"></img>
                        <p>+63 961 146 7366</p></div>
                        <div className="flex-box"><img src={facebook} className="icon-img"></img> 
                        <p>https://www.facebook.com/micaela.policarpio/</p></div>
             </div>
        </div>
    )
}