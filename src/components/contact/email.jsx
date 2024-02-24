import React from "react"
import { IoMdMail } from "react-icons/io";

function Email() {
    return(
        <div className="socials-item">
            <a href="mailto:rdarmawan2@aeiesec.net">
                <div className="container">
                    <IoMdMail />
                    <p>dysonryan6@gmail.com</p>
                </div>
            </a>
        </div>
    )
}

export default Email