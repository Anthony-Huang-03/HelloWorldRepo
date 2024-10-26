import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


const VictimMap = () => {

    const navigate = useNavigate();

    const handleClick1 = () => {
        // navigate('/VictimMap'); 
    };

    const handleClick2 = () => {
        navigate('/'); 
    };

    return (
        <div>
            <h1 className="title">You are here</h1>  
            <div className="warning">If you are in immediate danger, please call 911!</div> 
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