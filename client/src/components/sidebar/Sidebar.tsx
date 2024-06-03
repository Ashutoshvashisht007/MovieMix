import { useNavigate } from "react-router-dom"
import { FiAlignJustify } from "react-icons/fi";
import "./sidebar.css"
import { useState } from "react";


const Sidebar = () => {

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleLogo = ()=> {
    navigate("/");
    setIsVisible(false)
  }

  const handleLogin = ()=> {
    navigate("/login");
    setIsVisible(false);
  }

  const handleSignup = ()=> {
    navigate("/signup");
    setIsVisible(false);
  }

  return <>
  <button className="toggleButton" onClick={() => setIsVisible(!isVisible)}>
        <FiAlignJustify size={24} />
      </button>
    <div  className={`sidebar ${isVisible ? "visible" : "hidden"}`}>
      <button className="sidebarCross" onClick={() => setIsVisible(!isVisible)}>X</button>
      <div className="sidebarTop">
        <div className="sidebarTopDiv" onClick={handleLogo}>
          <img className="sidebarTopLogo" src="/logo.jpg" alt="MovieMix" />
          <span className="sidebarTopTitle">MovieMix</span>
        </div>
        <span className="sidebarTopPrivate">Private Movies Playlist</span>
        <span className="sidebarTopPublic">Public Movies Playlist</span>
      </div>
      <div className="sidebarBottom">
        <button className="sidebarBottomLogin" onClick={handleLogin}>Login</button>
        <button className="sidebarBottomSignup" onClick={handleSignup}>Signup</button>
      </div>
    </div>
    {/* <div className="sidebarResponsive" style={{ display: isVisible ? "flex" : "none" }}>
      <button className="sidebarResponsiveBtn"
        onClick={() => setIsVisible(false)}>
        <FiAlignJustify />
      </button>
    </div> */}

  </>

}

export default Sidebar