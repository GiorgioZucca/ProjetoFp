import React, { useState } from 'react';
import styles from './Personal.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    fullname: '',
    age: '',
    sex: '',
    height: '',
    weight: '',
    allergy: '',
    additionalInfo: ''
  });

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted personal info:', info);
    navigate("/portal");
  };

  return (
    <>
      <div className={styles.ppageBackground}></div>
      <div className={styles.pcontainer}>
        <h2 className={styles.pheader}>Insira seus dados</h2>
        <form onSubmit={handleSubmit}>
          {/* ... other fields similar to the ones below ... */}

          <div className={styles.pfield}>
            <label className={styles.plabel}>Nome completo:</label>
            <input
              type="text"
              name="fullname"
              value={info.fullname}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Idade:</label>
            <input
              type="number"
              name="age"
              value={info.age}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Sexo:</label>
            <select 
              name="sex"
              value={info.sex}
              onChange={handleInputChange}
              className={styles.pinput}>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outros</option>
            </select>
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Altura (cm):</label>
            <input
              type="number"
              name="height"
              value={info.height}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Peso (kg):</label>
            <input
              type="number"
              name="weight"
              value={info.weight}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Contraindicações e/ou alergias:</label>
            <input
              type="text"
              name="allergy"
              value={info.allergy}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Informações adicionais:</label>
            <textarea
              name="additionalInfo"
              value={info.additionalInfo}
              onChange={handleInputChange}
              className={styles.pinput}
            ></textarea>
          </div>

          <button type="submit" className={styles.pbutton}>Atualizar dados</button>
        </form>
      </div>
    </>
  );
}

export default Personal;