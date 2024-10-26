import React from "react";
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