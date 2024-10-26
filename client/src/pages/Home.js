import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/ProblemIdentification');
    };
    const handleClick2 = () => {
        navigate('/HeroSelection');
    };

    const [location, setLocation] = useState([51.505, -0.09]);

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 setLocation([
    //                     position.coords.latitude,
    //                     position.coords.longitude
    //                 ]);
    //             },
    //             (error) => {
    //                 console.error('Error getting location:', error);
    //             }
    //         );
    //     } else {
    //         console.error('Geolocation is not supported by this browser.');
    //     }
    // }, []);

    return (
        <div>
            <h1 className="title">Do you need help?</h1>   
            <div className="map"> --- MAP --- </div>
            <button onClick={handleClick1}>Yes</button>
            <button onClick={handleClick2}>No</button>
        </div>
    );
};

export default Home;