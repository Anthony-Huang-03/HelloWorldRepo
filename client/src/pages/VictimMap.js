import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';


const VictimMap = () => {

    const navigate = useNavigate();

    const handleClick1 = () => {
        // navigate('/VictimMap'); 
    };

    const handleClick2 = () => {
        navigate('/'); 
    };

    const [location, setLocation] = useState({ latitude: null, longitude: null });

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
    }, []);
    
    return (
        <div>
            <h1 className="title">You are here</h1>  
            <div className="warning">If you are in immediate danger, please call 911!</div> 
            <div className="map"> --- MAP --- </div>
            {location.latitude && location.longitude ? (
                    <Map position={location} />
                ) : (
                    <p>Loading map...</p>
            )}
            <div className="map"> --- MAP --- </div>
            <div className="direction">Your Name</div> 
            <div className="direction">Your Email</div> 
            <div className="direction">Your Problem Description</div> 

            <button onClick={handleClick1}>Send Help!</button>
            {/* 
                make button disapear 
                add text saying help request sent 
                show time elapsed after help requent sent 
                add button "finished with problem"
            */}
            <button onClick={handleClick2}>Back</button>
            
        </div>
    );
};

export default VictimMap;