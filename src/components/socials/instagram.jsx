import React from "react"
import { FaInstagram } from "react-icons/fa";

function Instagram() {
    return(
        <div className="socials-item">
            <a href="https://www.instagram.com/ryandyson/">
                <div className="container">
                    <FaInstagram />
                    <p>@ryandyson</p>
                </div>
            </a>
        </div>
    )
}

export default Instagram