import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Completed = ({ commission }) => { // Receive commission as a prop
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#FFF5E4", // Light blue background color
            color: "#000000", // Black text color
            fontFamily: "Arial, sans-serif",
            padding: "20px"
        }}>
            <h1 style={{ fontSize: "24px", textAlign: "center" }}>
                Thanks for helping!
            </h1>

            <p style={{ fontSize: "20px", marginTop: "20px" }}>
                <strong>Commission:</strong> {commission || "Loading..."} {/* Display fetched commission */}
            </p>

            <Link to="/home" style={{
                marginTop: "30px",
                fontSize: "18px",
                color: "#6A9C89", // Using one of the previous color codes
                textDecoration: "underline"
            }}>
                Go to Home
            </Link>
        </div>
    );
};

export default Completed;
