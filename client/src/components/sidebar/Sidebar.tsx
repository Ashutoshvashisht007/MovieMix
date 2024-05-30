import { useNavigate } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="sidebar">
        <div className="sidebarTop">
            <div className="sidebarTopDiv" onClick={() => navigate("/")}>
                <img className="sidebarTopLogo" src="/logo.jpg" alt="MovieMix" />
                <span className="sidebarTopTitle">MovieMix</span>
            </div>
            <span className="sidebarTopPrivate">Private Movies Playlist</span>
            <span className="sidebarTopPublic">Public Movies Playlist</span>
        </div>
        <div className="sidebarBottom">
            <button className="sidebarBottomLogin" onClick={()=> navigate("/login")}>Login</button>
            <button className="sidebarBottomSignup" onClick={()=> navigate("/signup")}>Signup</button>
        </div>
    </div>
  )
}

export default Sidebar