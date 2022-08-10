import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
