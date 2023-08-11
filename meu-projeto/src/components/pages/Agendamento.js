import React, { useState } from 'react';
import styles from './Personal.module.css';

const Agendamento = () => {
  const [appointment, setAppointment] = useState({
    service: '',
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
              <option value="service1">Drenagem</option>
              <option value="service2">Limpeza de pele</option>
              <option value="service3">Botox</option>
              <option value="service4">Radiofrequência</option>
              <option value="service5">Laser vermelho</option>
              <option value="service5">Laser Infravermelho</option>
              <option value="service5">Lipocavitação</option>
              <option value="service5">Luz pulsada</option>
              <option value="service5">Lavieen</option>
              <option value="service5">Ultraformer</option>
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
              <option value="doctor1">Esteticista - Dra. Amanda</option>
              <option value="doctor2">Dermatologista - Dra. Isabel</option>
              <option value="doctor3">Nutricionista - Dra. Beatriz</option>
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