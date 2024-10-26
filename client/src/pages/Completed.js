import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Completed = ({ commission }) => { // Receive commission as a prop
    return (
        <div>
            <h1> Thanks for helping! </h1>
            <p> <strong>Commission:</strong> {commission || "Loading..."} {/* Display fetched commission */} </p>
            <Link> Go to Home </Link>
        </div>
    );
};

export default Completed;
