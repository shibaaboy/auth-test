import React, { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const [email, setEmail] = useState(null)

  const logoutHandler = (evt) => {
    evt.preventDefault()
    auth.logout()
    history.push('/')
  }

  useEffect(() => {
    setTimeout(() => {
      const { userEmail } = JSON.parse(localStorage.getItem('userData'))
      setEmail(userEmail)
    }, 100)
  }, [])

  return (
    <nav>
      <div className="nav-wrapper light-blue darken-4">
        <a href="/" className="brand-logo">{email}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/main" activeClassName="active-link">First</NavLink></li>
          <li><NavLink to="/other" activeClassName="active-link">Second</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}