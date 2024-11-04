import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkExits, register } from '../../services/usersService';
import { generateToken } from '../../helpers/generateToken';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const checkExitsEmail = await checkExits("email", email);

    if (checkExitsEmail.length > 0) {
      setError("Email đã tồn tại");
    } else {
      const options = {
        fullName: fullName,
        email: email,
        password: password,
        token: generateToken(),
      };
      
      const response = await register(options);
      if (response) {
        navigate("/login"); // Chuyển sang trang đăng nhập
      } else {
        setError("Đăng ký không thành công!");
      }
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>} {/* Hiển thị thông báo lỗi */}
        <div>
          <input type="text" name="fullName" placeholder="Nhập họ tên" required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Nhập email" required />
        </div>
        <div>
          <input type="password" name="password" placeholder="Nhập mật khẩu" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register