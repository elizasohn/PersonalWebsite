import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
