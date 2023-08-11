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
                <h3>Agendamento {index + 1}</h3>
                <p><strong>Procedimento:</strong> {appointment.service}</p>
                <p><strong>Máquina:</strong> {appointment.equipment}</p>
                <p><strong>Profissional:</strong> {appointment.doctor}</p>
                <p><strong>Data:</strong> {appointment.date}</p>
                <p><strong>Hora:</strong> {appointment.hour}</p>
                <p><strong>Informações adicionais:</strong> {appointment.additionalInfo}</p>
              </div>
            ))
          ) : (
            <p>Você não possui agendamentos.</p>
          )}
        </div>
        <Link to="/agendamento" className={styles.ppersonalLink}>Novo agendamento</Link>
      </div>
    </>
  );
}

export default Portal;