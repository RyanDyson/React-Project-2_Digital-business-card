import React from "react"
import { FaLinkedin } from "react-icons/fa";

function LinkedIn() {
    return(
        <div className="socials-item">
            <a href="https://www.linkedin.com/in/ryan-dyson-darmawan-3a3b10241/">
                <div className="container">
                    <FaLinkedin />
                    <p>LinkedIn</p>
                </div>
            </a>
        </div>
    )
}

export default LinkedIn