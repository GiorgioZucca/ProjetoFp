import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.foocontainer}>
            <div className={styles.fooicons}>
                <a className={styles.fooiconLink} href="https://www.instagram.com/your_account/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                </a>
                <a className={styles.fooiconLink} href="https://www.facebook.com/your_account/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                </a>
                <a className={styles.fooiconLink} href="https://www.linkedin.com/in/your_account/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
            <div className={styles.fooslogan}>
                Loren ipskljaida dajmwdada dmk a
            </div>
        </div>
    );
}

export default Footer;