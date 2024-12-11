import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../components/authentication/auth";

const Login = () => {
  const navigate = useNavigate()
  const { login: handleLogin } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await login(form);
    
    if (response) {
      handleLogin(response);
      alert("congratulation")
      navigate("/")
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email..."
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
