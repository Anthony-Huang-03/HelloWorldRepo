import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


const ProblemDescription = () => {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/VictimMap'); 
    };

    const handleClick2 = () => {
        navigate('/'); 
    };

    return (
        <div>
            <h1 className="title">What is your problem?</h1>  
            <div className="warning">If you are in immediate danger, please call 911!</div> 
            <div className="map"> --- MAP --- </div>
            <form action="/action_page.php">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"></input>
                <br></br>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"></input>
                <br></br>
                <label for="issueDescription">Description:</label>
                <input type="text" id="description" name="description"></input>
                <br></br>
                <input onClick={handleClick1} type="submit" value="Submit"></input>
            </form>
            <button onClick={handleClick2}>Back</button>
        </div>
    );
};

export default ProblemDescription;