
import React from "react";
import "./LoginPage.css"
import InputField from "./InputFields";
import { Link } from "react-router-dom";

const LoginPage = () => (
    <div className="login-container">
      <div className="blue-panel left-panel"></div>
      <div className="white-panel right-panel">
        <header className="header">
          <h1 className="logo">Logo</h1>
          <nav className="nav">
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <div className="content">
          <p className="welcome">Welcome Back</p>
          <h2 className="title">Log into your account</h2>
          <p className="subtext">Don't have an account? <Link to="/register">Sign Up</Link></p>

          <InputField label="ID Number" buttonLabel="Get Code" placeholder="Enter your ID" />
          <InputField label="Enter Code" buttonLabel="Enter Code" placeholder="Enter the code sent to you" />

          <button className="login-btn">Log In</button>
        </div>
      </div>
    </div>
  );

export default LoginPage;
