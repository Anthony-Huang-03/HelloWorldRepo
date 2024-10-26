import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('');
  const [post, setPost] = useState('');
  const [responseToPost, setResponseToPost] = useState('');

  // This will call a GET request and set 'response' to the property express.
  useEffect(() => {
    axios.get('/api/hello')
        .then(res => {
          console.log("GET data:", res.data);
          setResponse(res.data.express);
        })
        .catch(err => console.log(err));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
      axios.post('/api/world', {
          post: post
      })
          .then(function (response) {
              console.log(response);
              setResponseToPost(response.data);
          })
          .catch(function (error) {
              console.log(error);
          });
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{response}</p>
        <form onSubmit={handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
              type="text"
              value={post}
              onChange={e => setPost(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseToPost}</p>
      </div>
  );
}

export default App;
