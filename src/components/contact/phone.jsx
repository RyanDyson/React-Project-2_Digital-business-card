import React from "react"
import { FaPhone } from "react-icons/fa";

function Phone() {
    return(
        <div className="socials-item">
            <a href="https://wa.me/85290581053">
                <div className="container">
                    <FaPhone />
                    <p>852 9058 1052</p>
                </div>
            </a>
        </div>
    )
}

export default Phone