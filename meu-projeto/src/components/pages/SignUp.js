import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted user info:', userInfo);
    // Implement sign-up logic here
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
          <Link to="/personal" className={styles.personalLink}>Criar uma conta</Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;