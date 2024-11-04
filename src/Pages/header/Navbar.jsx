import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        </div>

      </header>
    </>
  )
}

export default Navbar

