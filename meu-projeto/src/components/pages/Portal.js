import React from 'react';
import styles from './Portal.module.css';
import { Link } from 'react-router-dom';

const Portal = ({ userFullName, appointments }) => {
  return (
    <>
      <div className={styles.portalpageBackground}></div>
      <div className={styles.portalcontainer}>
        <h1 className={styles.portalheader}>Olá, {userFullName}!</h1>

        <div className={styles.portalappointments}>
          <h2>Seus agendamentos:</h2>
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <div key={index} className={styles.portalappointment}>
                <h3>Appointment {index + 1}</h3>
                <p><strong>Service:</strong> {appointment.service}</p>
                <p><strong>Equipment:</strong> {appointment.equipment}</p>
                <p><strong>Doctor:</strong> {appointment.doctor}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Hour:</strong> {appointment.hour}</p>
                <p><strong>Additional Info:</strong> {appointment.additionalInfo}</p>
              </div>
            ))
          ) : (
            <p>You have no appointments scheduled.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Portal;