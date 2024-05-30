import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home/Home"
import Sidebar from "./components/sidebar/Sidebar"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Movie from "./pages/movie/Movie"

function App() {

  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
