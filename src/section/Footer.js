import React from 'react'
import "./Footer.css"
import { FaFacebook ,FaLinkedin,FaInstagram,FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer__Container">
            <div className="footer__Main">
<h1>TheSpace</h1>
<div className="icons__Contact">
<FaFacebook color="white" size="3rem"/>
<FaInstagram color="white" size="3rem"/>
<FaLinkedin color="white" size="3rem"/>
<FaTwitter color="white" size="3rem"/>
</div>
            </div>
        </div>
    )
}

export default Footer
