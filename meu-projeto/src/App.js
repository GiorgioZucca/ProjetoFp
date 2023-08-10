import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Landing from './components/pages/Landing'
import Procd from './components/pages/Procd'
import About from './components/pages/About'
import LoginForm from './components/pages/LoginForm'
import SignUp from './components/pages/SignUp'
 
import './App.css';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar local_sobrenos="about"/>
      <Routes>
        <Route path='/' element={<Landing />}> </Route>
        <Route path='/procedimentos' element={<Procd />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/cadastro' element={<LoginForm />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
