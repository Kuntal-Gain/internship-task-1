import React, { useState } from 'react';
import './App.css';

const TextField = ({ label, type }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (type === "dropdown") {
    return (
      <div className='textInputContainer'>
        <label className='textInputLabel'>{label}</label>
        <select className='textInput'>
          <option value="">Select {label}</option>
          {/* Add your options here */}
        </select>
      </div>
    );
  }

  if (type === "password") {
    return (
      <div className='textInputContainer passwordContainer'>
        <label className='textInputLabel'>{label}</label>
        <div className='passwordWrapper'>
          <input
            type={passwordVisible ? "text" : "password"}
            className='textInput passwordInput'
          />
          <button
            type="button"
            className='passwordToggle'
            onClick={togglePasswordVisibility}
          >
            <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='textInputContainer'>
      <label className='textInputLabel'>{label}</label>
      <input type={type} className='textInput' />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form>
        <TextField label="First Name" type="text" />
        <TextField label="Last Name" type="text" />
        <TextField label="Username" type="text" />
        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />
        <TextField label="Phone" type="tel" />
        <TextField label="Country" type="dropdown" />
        <TextField label="City" type="dropdown" />
        <TextField label="Pan No." type="text" />
        <TextField label="Aadhar No." type="text" />
        <TextField label="Sign In" type="submit" />
      </form>
    </div>
  );
}

export default App;
