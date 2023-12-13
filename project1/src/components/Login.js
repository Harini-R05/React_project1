// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Update the import statement

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null); // Initialize errors as null

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (!validationErrors) {
      alert('Done');
    }
  };

  const validate = () => {
    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email not matched';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password should be at least 8 characters';
    }

    // Return null if there are no errors
    return Object.keys(validationErrors).length === 0 ? null : validationErrors;
  };

  return (
    <div className='background'>
      <div className='navbar'>
        <div className='logo'>Amazons</div>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/'>Login</Link>
          <Link to='/Registration'>Register</Link>
          <Link to='/Feedback'>Feedback</Link>
        </div>
      </div>
      <div className='login-box'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='login-group'>
            
            <input
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Email'
            />
            {errors?.email && <div className='error'>{errors.email}</div>}
          </div>
          <div className='login-group'>
            
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password'
            />
            {errors?.password && <div className='error'>{errors.password}</div>}
          </div>
          <button type='submit'>Login</button>
        </form>
        <div className='signup-link'>
          <p>
            Don't have an account? <Link to='/Registration'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
