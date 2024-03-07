import React from "react"
import ReactDOM from "react-dom/client"
import MainContent from "./components/main"
import Header from "./components/header"
import ProjectList from "./components/project-list"
import AboutMe from "./components/about"
import SkillsSection from "./components/skills"

function App() {
    return (
        <div className="app">
            <div className="card card-one">
                <Header />
                <MainContent />
            </div>
            <div className="card card-two">
                <AboutMe />
                <SkillsSection />
                <ProjectList />
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)