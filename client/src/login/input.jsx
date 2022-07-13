import React, { useState } from "react";
import "./z2 2home.css";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/user";

export default function Form({handleSigned}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = () => {
    login(email, password, handleSigned);
    navigate('/');
  }

  return (
    <form className="Form2" action="post" onSubmit={() => handleSubmit()}>
      <input
        className="input1"
        type = "text"
        onChange={handleEmail}
        placeholder="Email"
      />
      <input
        className="input1"
        type = "password"
        onChange={handlePassword}
        placeholder="Password"
      />
      <input type="submit" value="Войти" className="buttonz2" />
    </form>
  );
}
