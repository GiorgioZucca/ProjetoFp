import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if passwords match
    if (userInfo.password !== userInfo.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Send data to JSON server
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: userInfo.username,
          email: userInfo.email,
          password: userInfo.password // Note: In a real-world application, never store plain-text passwords!
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User saved:', data);
        
        // Navigate to the /personal route after successful sign-up
        navigate("/personal");
        
      } else {
        console.error('Failed to save user.');
      }
    } catch (error) {
      console.error('There was an error:', error);
    }
  };

  return (
    <>
      <div className={styles.spageBackground}></div>
      <div className={styles.scontainer}>
        <h2 className={styles.sheader}>Criar conta</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.sfield}>
            <label className={styles.slabel}>Nome de usuário:</label>
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className={styles.sinput}
            />
          </div>
          <div className={styles.sfield}>
            <label className={styles.slabel}>Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className={styles.sinput}
            />
          </div>
          <div className={styles.sfield}>
            <label className={styles.slabel}>Senha:</label>
            <input
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
              className={styles.sinput}
            />
          </div>
          <div className={styles.sfield}>
            <label className={styles.slabel}>Confirmar senha:</label>
            <input
              type="password"
              name="confirmPassword"
              value={userInfo.confirmPassword}
              onChange={handleInputChange}
              className={styles.sinput}
            />
          </div>
          <button type="submit" className={styles.sbutton}>Criar conta</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;