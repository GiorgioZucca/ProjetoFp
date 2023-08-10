import React from 'react';
import styles from './Portal.module.css';

const Task = ({ tasks }) => {
  return (
    <>
      <div className={styles.portalpageBackground}></div>
      <div className={styles.portalcontainer}>
        <h1 className={styles.portalheader}>Your Tasks</h1>

        <div className={styles.portalappointments}>
          <h2>Scheduled Tasks:</h2>
          {tasks && tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className={styles.portalappointment}>
                <h3>{task.patientFullName}</h3>
                <p><strong>Service:</strong> {task.service}</p>
                <p><strong>Date:</strong> {task.date}</p>
                <p><strong>Hour:</strong> {task.hour}</p>
                <p><strong>Additional Info:</strong> {task.additionalInfo}</p>
              </div>
            ))
          ) : (
            <p>You have no tasks scheduled.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Task;