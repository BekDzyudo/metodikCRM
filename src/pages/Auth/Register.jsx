import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../components/authentication/auth";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "", password2: "" });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await register(form);
   console.log(response);
   
    if (response.status == 201) {
      navigate("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password confirm"
        value={form.password2}
        onChange={(e) => setForm({ ...form, password2: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
