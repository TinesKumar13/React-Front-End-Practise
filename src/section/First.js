import React from 'react'
import "./First.css"
import laptop from "../img/laptop.png"
const First = () => {
    return (
        <div className="sectionOne__Container">
            
        <div className="description">
            <h1>Welcome The New Generation Of Laptop Services</h1>
            <p>We at TheSpace are delighted on the opening of our shop to further help our customers fix their tech during the Lockdown.</p>
            <button>Locate Us</button>
        </div>

        <img src={laptop} />
        </div>
    )
}

export default First
