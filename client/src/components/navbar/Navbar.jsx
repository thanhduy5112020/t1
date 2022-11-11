import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear()
    navigate('/login')
  }
  const login =()=>{
    navigate('/login')
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Duy Hotel</span>
        </Link>
        {user ?
          (<div>
            <span>{user.username}</span>
            <button className="navButton" onClick={() => logout()}>Logout</button>
          </div>
          )
          : (
            <div className="navItems">
              <button className="navButton">Regitser</button>
              <button className="navButton" onClick={() => login()}>Login</button>
            </div>)}
      </div>
    </div>
  )
}

export default Navbar