import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


const ProblemIdentification = () => {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/ProblemDescription'); 
    };
    const handleClick2 = () => {
        navigate('/'); 
    };

    return (
        <div>
            <h1 className="title">What is your problem?</h1>  
            <div className="warning">If you are in immediate danger, please call 911!</div> 
            <div className="map"> --- MAP --- </div>
            <div className="direction">Please select category</div> 
            <button onClick={handleClick1}>Vehicle Breakdowns</button>
            <button onClick={handleClick1}>Limited Food Options</button>
            <button onClick={handleClick1}>Bad Weather Conditions</button>
            <button onClick={handleClick1}>Running Out of Fuel</button>
            <button onClick={handleClick1}>Boredom</button>
            <button onClick={handleClick1}>Fatigue and Driver Exhaustion</button>
            <button onClick={handleClick2}>Back</button>
        </div>
    );
};

export default ProblemIdentification;