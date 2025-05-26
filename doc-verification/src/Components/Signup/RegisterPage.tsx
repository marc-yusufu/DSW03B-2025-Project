import React from 'react';
import './RegisterPage.css';
import InputField from './InputField';
import { Link } from 'react-router-dom';

const RegisterPage = () => (
  <div className="register-container">
    <div className="white-panel left-panel">
      <header className="header">
        <h1 className="logo">Logo</h1>
        <nav className="nav">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <div className="content">
        <p className="welcome">Start here.</p>
        <h2 className="title">Create new account<span className="dot">.</span></h2>
        <p className="subtext">Have an account? <Link to="/login">Log In</Link></p>

        <div className="two-cols">
          <InputField label="Name" />
          <InputField label="Surname" />
        </div>

        <div className="single-row">
          <InputField label="ID Number" />
        </div>

        <div className="two-cols">
          <InputField label="Phone" buttonLabel="Get Code" />
          <InputField label="Enter Code" buttonLabel="Verify" />
        </div>

        <button className="register-btn">Register</button>
      </div>
    </div>
    <div className="blue-panel right-panel"></div>
  </div>
);

export default RegisterPage;
