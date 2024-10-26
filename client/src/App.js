import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Completed from "./pages/Completed";
import Confirmation from "./pages/Confirmation";
import ConfirmInfo from "./pages/ConfirmInfo";
import Guide from "./pages/Guide";
import HeroSelection from "./pages/HeroSelection";
import Home from "./pages/Home";
import NoPeopleAvail from "./pages/NoPeopleAvail";
import ProblemDescription from "./pages/ProblemDescription";
import ProblemIdentification from "./pages/ProblemIdentification";
import RateAfterHelp from "./pages/RateAfterHelp";
import VictimMap from "./pages/VictimMap";

function App() {
  // const [response, setResponse] = useState('');
  // const [post, setPost] = useState('');
  // const [responseToPost, setResponseToPost] = useState('');

  // This will call a GET request and set 'response' to the property express.
  // useEffect(() => {
  //   axios.get('/api/hello')
  //       .then(res => {
  //         console.log("GET data:", res.data);
  //         setResponse(res.data.express);
  //       })
  //       .catch(err => console.log(err));
  // }, []);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //     axios.post('/api/world', {
  //         post: post
  //     })
  //         .then(function (response) {
  //             console.log(response);
  //             setResponseToPost(response.data);
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
  // };

  return (
      <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<Completed />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
