import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import EventList from './Components/EventList';
import Animations from './Components/Animations';
import BlogPost from './Components/BlogPost';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/Animations" element={<Animations />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/EventList" element={<EventList/>} />
      </Routes>
    </Router>
     
    <footer>
  Olayinka Fakanbi copywrite 2023
</footer>
    </div>
  );
}

export default App;
