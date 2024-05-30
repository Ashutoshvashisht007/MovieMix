import "./signup.css"

const Signup = () => {
  return (
    <div className="signup">
      <form className="loginWrapper">
        <h1 style={{letterSpacing:"5px"}}>SIGN UP</h1>
        <div className="loginWrapper1">
          <label style={{letterSpacing:"1px"}}>Username</label>
          <input className="loginWrapperInput" type="text" placeholder="Username" />
          <label style={{letterSpacing:"1px"}}>Email</label>
          <input className="loginWrapperInput" type="text" placeholder="Email" />
          <label style={{letterSpacing:"1px"}}>Password</label>
          <input className="loginWrapperInput" type="password" placeholder="password" />
        </div>
        <button className="loginWrapperBtn">Signup</button>
      </form>
    </div>
  )
}

export default Signup