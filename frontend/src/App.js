import { Routes, Route } from "react-router-dom"

import "./App.css"
import Home from "./components/pages/home/Home"
import Auth from "./components/pages/auth/Auth"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth isLoggedIn={true} />} />
        <Route path="/register" element={<Auth isLoggedIn={false} />} />
      </Routes>
    </>
  )
}

export default App
