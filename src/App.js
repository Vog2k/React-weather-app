
import React from 'react';
import './index.css';
import Navbar from './NavBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import National from './National';
import Home from './Home';



function App() {
return (
    <Router>
    <Navbar />
    <Routes>
    
    <Route path='/Home' exact element={<Home/>} />
        <Route path='/National' element={<National/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />



    </Routes>
    </Router>
    
);
}
  
export default App;