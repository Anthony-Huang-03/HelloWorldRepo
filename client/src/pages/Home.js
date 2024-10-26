import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/ProblemIdentification');
    };
    const handleClick2 = () => {
        navigate('/HeroSelection');
    };

    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [victims, setVictims] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }

        axios.get("http://localhost:5000/api/victims")
            .then(data => {
                console.log(data);
                setVictims(data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return (
        <div className="App">
            <h1 className="title">Do you need help?</h1>   
            <div className="map"> --- MAP --- </div>
            {location.latitude && location.longitude && victims ? (
                    <Map position={location} victims={victims} />
                ) : (
                    <p>Loading map...</p>
            )}
            <div className="map"> --- MAP --- </div>
            <button onClick={handleClick1}>Yes</button>
            <button onClick={handleClick2}>No</button>
        </div>
    );
};

export default Home;