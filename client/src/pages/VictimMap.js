import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


const VictimMap = () => {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/VictimMap'); 
    };

    return (
        <div>
            <h1 className="title">You are here</h1>  
            <div className="warning">If you are in immediate danger, please call 911!</div> 
            <div className="map"> --- MAP --- </div>
            
            <div className="direction">Please descripe your problem:</div> 
            <form action="/action_page.php">
                <label for="issueDescription">Description:</label>
                <input type="text" id="fname" name="fname"></input>
                <br></br>
                <input onClick={handleClick1} type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default VictimMap;