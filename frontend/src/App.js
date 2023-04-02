import { useState } from "react"
import { Routes, Route } from "react-router-dom"
// import { BrowserRouter as Router, Switch } from "react-router-dom"

import "./App.css"
// import PrivateRoute from "./PrivateRoute"
import Home from "./components/pages/home/Home"
import Login from "./components/pages/login/Login"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <>
      {/* {isLoggedIn === true ? (
        <div className="App">
          <h1>SIM Wifi Rumah</h1>
        </div>
      ) : (
        <>Login</>
      )} */}

      <Routes>
        {/* <Switch>
          <Route
            exact
            path="/login"
            element={<Login />}
            onLogin={handleLogin}
          />
          <PrivateRoute
            exact
            path="/"
            element={<Home />}
            isLoggedIn={isLoggedIn}
          />
        </Switch> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
