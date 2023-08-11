import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const isEmployee = (emailAddress) => {
    return emailAddress.endsWith('@jj.com');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitted credentials:', credentials);

    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();

      const matchedUser = users.find(user => 
        user.username === credentials.username && 
        user.email === credentials.email && 
        user.password === credentials.password
      );

      if (matchedUser) {
        if (isEmployee(credentials.email)) {
          navigate("/task");
        } else {
          navigate("/portal");
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('There was an error:', error);
    }
  };

  return (
    <div className={styles.fpageBackground}>
      <div className={styles.fcontainer}>
        <h2 className={styles.fheader}>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.ffield}>
            <label className={styles.flabel}>Nome de usuário:</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              className={styles.finput}
            />
          </div>
          <div className={styles.ffield}>
            <label className={styles.flabel}>E-mail:</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              className={styles.finput}
            />
          </div>
          <div className={styles.ffield}>
            <label className={styles.flabel}>Senha:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className={styles.finput}
            />
          </div>
          <button type="submit" className={styles.fbutton}>Entrar</button>
          <div className={styles.signupPrompt}>
            Não possui uma conta? 
            <Link to="/signup" className={styles.signupLink}>Criar uma conta</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;