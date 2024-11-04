import React from 'react'
import { useNavigate } from "react-router-dom";
import { deleteAllCookie } from "../../helpers/cookie";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { checkLogin } from "../../actions/login";


const Logout = () => {
    //chuyển hướng sang trang login
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookie();
  
    useEffect(() => {
      dispatch(checkLogin(false))
      navigate("/login");
    }, []);
  return (
    <></>
  )
}

export default Logout