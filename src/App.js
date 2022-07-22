import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Resume from './Components/Pages/Resume';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Resume" element={<Resume />}/>
            <Route exact path="/Projects" element={<Projects />}/>
            <Route exact path="/Contact" element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
