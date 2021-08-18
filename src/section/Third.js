import React from 'react'
import "./Third.css"
import contact from "../img/contact.png"
const Third = () => {
    return (
        <div className= "third__Container">

            <div className="third__Main">
                <header className = "third__Description">
                <h1>Contact Us Now For A Quotation</h1>
            <p>We are <span style={{color: "#ff5487"}}>ready</span> to serve you at your doorstep</p>
            <div className="email__Form">
              <input placeholder = "Email Address" id="email" type="email" required name="_replyto" />
            </div>
            <button className="contact__Button">Contact Us</button>
                </header>

                <img className="img__Contact"src={contact} />
            </div>

        </div>
    )
}

export default Third
