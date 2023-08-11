import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Landing from './components/pages/Landing'
import Procd from './components/pages/Procd'
import About from './components/pages/About'
import LoginForm from './components/pages/LoginForm'
import SignUp from './components/pages/SignUp'
import Personal from './components/pages/Personal'
import Portal from './components/pages/Portal'
import Agendamento from './components/pages/Agendamento'
import Task from './components/pages/Task'
 
import './App.css';
import Navbar from './components/layout/Navbar'

function App() {
  const userFullName = "John Doe";
  const appointments = [
    {
      service: "Service 1",
      equipment: "Equipment 2",
      doctor: "Doctor 3",
      date: "2023-09-20",
      hour: "14:00",
      additionalInfo: "None"
    },
    // ... add more appointments as needed
  ];
  const tasks = [
    {
      patientFullName: "John Doe",
      service: "Service 1",
      date: "2023-09-20",
      hour: "14:00",
      additionalInfo: "None"
    },
    // ... add more tasks as needed
  ];

  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing />}> </Route>
        <Route path='/cadastro' element={<LoginForm />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/personal' element={<Personal />}></Route>
        <Route path='/portal' element={<Portal userFullName={userFullName} appointments={appointments} />}></Route>
        <Route path='/agendamento' element={<Agendamento />}></Route>
        <Route path='/task' element={<Task tasks={tasks}/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
