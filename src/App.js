import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import EventList from './Components/EventList';
import Animations from './Components/Animations';
import BlogPost from './Components/BlogPost';
import HaikuGenerator from './Components/HaikuGenerator';
import Budget from './Components/Budget';
import ReverseTextForm from './Components/ReverseTextForm';
import ProgressBar from './Components/ProgressBar';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Router>
      <Routes>
        <Route path="/HaikuGenerator" element={<HaikuGenerator/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/ProgressBar" element={<ProgressBar/>} />
        <Route path="/Budget" element={<Budget/>} />
        <Route path="/ReverseTextForm" element={<ReverseTextForm/>} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/Animations" element={<Animations />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/EventList" element={<EventList/>} />
      </Routes>
    </Router>
     
   
    </div>
  );
}

export default App;
