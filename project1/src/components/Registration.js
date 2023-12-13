// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'; // Update the import statement

function Registration() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDOB] = useState(''); // Add this line for date of birth
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Registration Successful');
      // Add logic for registration, e.g., API call
    }
  };

  const validate = () => {
    const validationErrors = {};

    if (!fullName) {
      validationErrors.fullName = 'Full Name is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password should be at least 8 characters';
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!dob) {
      validationErrors.dob = 'Date of Birth is required';
    }

    return validationErrors;
  };

  return (
    <div className='registration-background'>
      <div className='navbar'>
        <div className='logo'>Amazon</div>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/'>Login</Link> {/* Updated Link to point to /Login */}
          <Link to='/Registration'>Register</Link> {/* Updated Link to point to /Registration */}
          <Link to='/Feedback'>Feedback</Link> {/* Updated Link to point to /Feedback */}
        </div>
      </div>
      <div className='registration-box'>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='registration-group'>
            
            <input
              type='text'
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Enter Full Name'
            />
            {errors.fullName && <div className='error'>{errors.fullName}</div>}
          </div>
          <div className='registration-group'>
           
            <input
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Email'
            />
            {errors.email && <div className='error'>{errors.email}</div>}
          </div>
          <div className='registration-group'>
            
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password'
            />
            {errors.password && <div className='error'>{errors.password}</div>}
          </div>
          <div className='registration-group'>
            
            <input
              type='password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && (
              <div className='error'>{errors.confirmPassword}</div>
            )}
          </div>
          <div className='registration-group'>
            
            <input
              type='date'
              onChange={(e) => setDOB(e.target.value)}
              value={dob}
              placeholder='Enter Date of Birth'
            />
            {errors.dob && <div className='error'>{errors.dob}</div>}
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <div className='login-link'>
          <p>Already have an account? <Link to='/'>Log In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
