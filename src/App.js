import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>

      <Navbar />
      <Routes>
        <Route exact path = "/about" element={<About />} /> 
        <Route exact path = "/contact" element={<Contact />} />
      </Routes>

    </Router>
    </>
  );
}

export default App;
