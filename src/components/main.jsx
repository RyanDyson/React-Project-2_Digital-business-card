import React from "react"
import Instagram from "./socials/instagram"
import LinkedIn from "./socials/linkedin"
import GitHub from './socials/github'
import Phone from './contact/phone'
import Email from './contact/email'

function MainContent() {
    return (
        <div className="main-content">
            <div className="main-container">
                <h3>contact me 👋</h3>
                <Phone />
                <Email />
            </div>
            <div className="main-container">
                <h3>socials 📱</h3>
                <Instagram />
                <LinkedIn />
                <GitHub />
            </div>
        </div>
    )
}

export default MainContent
