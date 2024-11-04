import React, { useState } from "react";
import { checkLogin } from "../../actions/login";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //Khi login gửi lên 1 dispatch
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //gọi api
    const email = e.target[0].value;
    const password = e.target[1].value;
    const response = await login(email, password);
    if (response && Array.isArray(response) && response.length > 0) {
      // Kiểm tra xem mật khẩu có khớp không
      if (response[0].password === password) {
        setCookie("id", response[0].id, 1);
        setCookie("fullName", response[0].fullName, 1);
        setCookie("email", response[0].email, 1);
        setCookie("token", response[0].token, 1);
        dispatch(checkLogin(true));
        navigate("/"); // Chuyển hướng sang trang chủ
      } else {
        setError("Sai tài khoản hoặc mật khẩu!"); // Hiển thị thông báo lỗi
      }
    } else {
      setError("Sai tài khoản hoặc mật khẩu!"); // Hiển thị thông báo lỗi
    }
    // console.log(e.target[0].value);
    //Lấy dữ liệu ô input thứ nhất
    // console.log(e.target[1].value);
    //lấy dữ liệu ô input thứ hai
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>} {/* Hiển thị thông báo lỗi */}
        <div className="email">
          <input type="email" name="email" placeholder="Nhập email" required />
        </div>
        <div className="password">
          <input type="password" name="password" placeholder="Nhập mật khẩu" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;


