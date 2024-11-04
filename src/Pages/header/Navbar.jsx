import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCookie } from '../../helpers/cookie';
import { useSelector } from "react-redux";

const Navbar = () => {
  const token = getCookie("token");
  const isLogin = useSelector(state => state.loginReducer);
  return (
    <>
      <header className='header'>
        <div className='container d-flex'>
          <div className="navLink">
            <ul className='nav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/blog'>Blogs</Link>
              </li>
              <li>
                <Link to='/news'>News</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="account">
            {token ? (
              <>
                <NavLink to="/logout">Logout</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar

