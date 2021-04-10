import React from 'react'
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Home/>
    <Contact/>
    <About/>
    </div>
  );
}

export default App;
