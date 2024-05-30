import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <form className="loginWrapper">
        <h1 style={{letterSpacing:"5px"}}>LOGIN</h1>
        <div className="loginWrapper1">
          <label style={{letterSpacing:"1px"}}>Username</label>
          <input className="loginWrapperInput" type="text" placeholder="Username" />
          <label style={{letterSpacing:"1px"}}>Password</label>
          <input className="loginWrapperInput" type="password" placeholder="password" />
        </div>
        <button className="loginWrapperBtn">Login</button>
      </form>
    </div>
  )
}

export default Login