import React, { useState } from 'react';
import styles from './Personal.module.css';

const Agendamento = () => {
  const [appointment, setAppointment] = useState({
    service: '',
    equipment: '',
    doctor: '',
    date: '',
    hour: '',
    additionalInfo: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointment({
      ...appointment,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted appointment info:', appointment);
  };

  return (
    <>
      <div className={styles.ppageBackground}></div>
      <div className={styles.pcontainer}>
        <h2 className={styles.pheader}>Agende um procedimento</h2>
        <form onSubmit={handleSubmit}>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Procedimentos:</label>
            <select 
              name="service"
              value={appointment.service}
              onChange={handleInputChange}
              className={styles.pinput}>
              {/* Replace with your specific options */}
              <option value="service1">Procedimento 1</option>
              <option value="service2">Procedimento 2</option>
              <option value="service3">Procedimento 3</option>
              <option value="service4">Procedimento 4</option>
              <option value="service5">Procedimento 5</option>
            </select>
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Máquina:</label>
            <select 
              name="equipment"
              value={appointment.equipment}
              onChange={handleInputChange}
              className={styles.pinput}>
              {/* Replace with your specific options */}
              <option value="equipment1">Máquina 1</option>
              <option value="equipment2">Máquina 2</option>
              <option value="equipment3">Máquina 3</option>
              <option value="equipment4">Máquina 4</option>
              <option value="equipment5">Máquina 5</option>
            </select>
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Profissional:</label>
            <select 
              name="doctor"
              value={appointment.doctor}
              onChange={handleInputChange}
              className={styles.pinput}>
              {/* Replace with your specific options */}
              <option value="doctor1">Profissional 1</option>
              <option value="doctor2">Profissional 2</option>
              <option value="doctor3">Profissional 3</option>
              <option value="doctor4">Profissional 4</option>
              <option value="doctor5">Profissional 5</option>
            </select>
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Data:</label>
            <input
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Hora:</label>
            <input
              type="time"
              name="hour"
              value={appointment.hour}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Informações adicionais:</label>
            <textarea
              name="additionalInfo"
              value={appointment.additionalInfo}
              onChange={handleInputChange}
              className={styles.ptextarea}
            ></textarea>
          </div>

          <button type="submit" className={styles.pbutton}>Agendar</button>
        </form>
      </div>
    </>
  );
}

export default Agendamento;