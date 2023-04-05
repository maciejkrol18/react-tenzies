import "./App.css"
import MainMenu from "./views/MainMenu"
import Game from "./views/Game"
import { Routes, Route } from "react-router-dom"

const App = () => {
    return (
      <>
        <div className="webpage-container">
          <Routes>
            <Route path="/" element={<MainMenu/>}/>
            <Route path="/game" element={<Game/>}/>
          </Routes>
        </div>
      </>
    )
}

export default App