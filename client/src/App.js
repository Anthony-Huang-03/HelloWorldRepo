import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import { 
  Box, 
  Heading, 
  HStack,
  Button, 
  Spacer, 
  Text, 
  Image, 
  VStack, 
  ChakraProvider,
  defaultConfig,
  defaultSystem
  } from '@chakra-ui/react'

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
    <ChakraProvider value={defaultSystem}>
      <div className="App">
        <Button>HELLO</Button>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<Completed />} />
                <Route path="/Completed" element={<Completed />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<ConfirmInfo />} />
                <Route path="/ConfirmInfo" element={<ConfirmInfo />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<Confirmation />} />
                <Route path="/Confirmation" element={<Confirmation />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<Guide />} />
                <Route path="/Guide" element={<Guide />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<HeroSelection />} />
                <Route path="/HeroSelection" element={<HeroSelection />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<NoPeopleAvail />} />
                <Route path="/NoPeopleAvail" element={<NoPeopleAvail />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<ProblemDescription />} />
                <Route path="/ProblemDescription" element={<ProblemDescription />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<ProblemIdentification />} />
                <Route path="/ProblemIdentification" element={<ProblemIdentification />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<RateAfterHelp />} />
                <Route path="/RateAfterHelp" element={<RateAfterHelp />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<VictimMap />} />
                <Route path="/VictimMap" element={<VictimMap />} />
            </Routes>
        </Router>
      </div>
      </ChakraProvider>
  );
}

export default App;
