import React from 'react';
import styles from './Portal.module.css';

const Task = ({ tasks }) => {
  return (
    <>
      <div className={styles.portalpageBackground}></div>
      <div className={styles.portalcontainer}>
        <h1 className={styles.portalheader}>Suas consultas</h1>

        <div className={styles.portalappointments}>
          <h2>Consultas agendadas:</h2>
          {tasks && tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className={styles.portalappointment}>
                <h3>{task.patientFullName}</h3>
                <p><strong>Procedimento:</strong> {task.service}</p>
                <p><strong>Data:</strong> {task.date}</p>
                <p><strong>Hora:</strong> {task.hour}</p>
                <p><strong>Informações adicionais:</strong> {task.additionalInfo}</p>
              </div>
            ))
          ) : (
            <p>Não tenho agendamentos marcados.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Task;