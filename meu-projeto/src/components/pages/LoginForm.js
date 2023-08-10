import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted credentials:', credentials);
    // Implement authentication logic here
  };

  return (
    <div className={styles.fpageBackground}>
        <div className={styles.fcontainer}>
        <h2 className={styles.fheader}>Entrar</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles.ffield}>
            <label className={styles.flabel}>E-mail ou nome de usuário:</label>
            <input
                type="text"
                name="username"
                value={credentials.username}
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
            <Link to="/portal" className={styles.portalpersonalLink}>portal</Link>

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