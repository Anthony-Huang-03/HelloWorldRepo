import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

  // import { ColorModeProvider } from './color-mode';

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
                <Route path="/Home" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/Completed" element={<Completed />} />
            </Routes>
            <Routes>
                <Route path="/ConfirmInfo" element={<ConfirmInfo />} />
            </Routes>
            <Routes>
                <Route path="/Confirmation" element={<Confirmation />} />
            </Routes>
            <Routes>
                <Route path="/Guide" element={<Guide />} />
            </Routes>
            <Routes>
                <Route path="/HeroSelection" element={<HeroSelection />} />
            </Routes>
            <Routes>
                <Route path="/NoPeopleAvail" element={<NoPeopleAvail />} />
            </Routes>
            <Routes>
                <Route path="/ProblemDescription" element={<ProblemDescription />} />
            </Routes>
            <Routes>
                <Route path="/ProblemIdentification" element={<ProblemIdentification />} />
            </Routes>
            <Routes>
                <Route path="/RateAfterHelp" element={<RateAfterHelp />} />
            </Routes>
            <Routes>
                <Route path="/VictimMap" element={<VictimMap />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
