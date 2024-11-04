import React from 'react';
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Search = (cartItem) => {
  return (
    <>
      <section className="search">
        <div className="container c-flex"></div>
        <div className="logo width">
          <img src={logo} alt="" />
        </div>
        <div className="search-box f-flex">
          <i className='fa fa-search'></i>
          <input type="text" placeholder='Search' />
          <span>Search</span>
        </div>
        <div className="icon f-flex width">
          <i className='fa fa-user icon-circle'></i>
          <div className="cart">
            <Link to="/cart">
              <i className='fa fa-shopping-bag icon-circle'></i>
              <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search