import React from "react"
import { FaGithub} from "react-icons/fa";

function GitHub() {
    return(
        <div className="socials-item">
            <a href="https://github.com/RyanDyson">
                <div className="container">
                    <FaGithub />
                    <p>Github</p>
                </div>
            </a>
        </div>
    )
}

export default GitHub