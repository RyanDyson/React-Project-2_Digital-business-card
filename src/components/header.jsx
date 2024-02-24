import React from "react"
import pfp from "../assets/ryan.jpg"

function Header() {
    return (
        <div className="header">
            <img src={pfp} alt="Profile Picture" className="header-pfp" />
            <div className="header-text">
                <small>Hi I'm</small>
                <h1>Ryan Dyson Darmawan</h1>
                <h2>Computer Science Undergraduate at City University of Hong Kong</h2>
            </div>
        </div>
    )
}

export default Header