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
        <h2 className={styles.pheader}>Schedule an Appointment</h2>
        <form onSubmit={handleSubmit}>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Services:</label>
            <select 
              name="service"
              value={appointment.service}
              onChange={handleInputChange}
              className={styles.pinput}>
              {/* Replace with your specific options */}
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
              <option value="service4">Service 4</option>
              <option value="service5">Service 5</option>
            </select>
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Equipment:</label>
            <select 
              name="equipment"
              value={appointment.equipment}
              onChange={handleInputChange}
              className={styles.pinput}>
              {/* Replace with your specific options */}
              <option value="equipment1">Equipment 1</option>
              <option value="equipment2">Equipment 2</option>
              <option value="equipment3">Equipment 3</option>
              <option value="equipment4">Equipment 4</option>
              <option value="equipment5">Equipment 5</option>
            </select>
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Doctor:</label>
            <select 
              name="doctor"
              value={appointment.doctor}
              onChange={handleInputChange}
              className={styles.pinput}>
              {/* Replace with your specific options */}
              <option value="doctor1">Doctor 1</option>
              <option value="doctor2">Doctor 2</option>
              <option value="doctor3">Doctor 3</option>
              <option value="doctor4">Doctor 4</option>
              <option value="doctor5">Doctor 5</option>
            </select>
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Date:</label>
            <input
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Hour:</label>
            <input
              type="time"
              name="hour"
              value={appointment.hour}
              onChange={handleInputChange}
              className={styles.pinput}
            />
          </div>

          <div className={styles.pfield}>
            <label className={styles.plabel}>Additional Info:</label>
            <textarea
              name="additionalInfo"
              value={appointment.additionalInfo}
              onChange={handleInputChange}
              className={styles.ptextarea}
            ></textarea>
          </div>

          <button type="submit" className={styles.pbutton}>Book Appointment</button>
        </form>
      </div>
    </>
  );
}

export default Agendamento;