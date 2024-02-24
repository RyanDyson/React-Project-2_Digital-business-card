import React from "react"
import ReactDOM from "react-dom/client"
import MainContent from "./components/main"
import Header from "./components/header"

function App() {
    return (
        <div className="card">
            <Header />
            <MainContent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)