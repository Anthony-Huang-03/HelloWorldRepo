import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const ConfirmInfo = ({ userName, userEmail, problemDescription }) => {
    const navigate = useNavigate(); // Initialize navigate for navigation

    // Function to handle button clicks
    const handleButtonClick = () => {
        navigate("/Completed"); // Navigate to Completion page for all buttons
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#FFF5E4",
            height: "100vh",
            color: "#000000"
        }}>
            <h1 style={{
                fontSize: "24px",
                marginBottom: "20px",
                textAlign: "center"
            }}>
                Selection Confirmed!
            </h1>

            <p style={{
                fontSize: "18px",
                color: "#6A9C89",
                marginBottom: "40px",
                textAlign: "center"
            }}>
                Email notification sent to the selected user.
            </p>

            <div style={{ marginBottom: "80px" }}></div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "80%",
                maxWidth: "600px"
            }}>
                <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                    <strong>User Name:</strong> {userName || "Loading..."}
                </p>

                <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                    <strong>User Email:</strong> {userEmail || "Loading..."}
                </p>

                <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                    <strong>Problem Description:</strong>
                </p>

                <div style={{
                    backgroundColor: "#FFF5E4",
                    color: "#000000",
                    border: "1px solid #C1D8C3",
                    borderRadius: "8px",
                    padding: "10px",
                    minHeight: "100px",
                    width: "100%",
                    fontSize: "16px",
                    overflowY: "auto"
                }}>
                    {problemDescription || "Loading..."}
                </div>
            </div>

            <h2 style={{
                fontSize: "20px",
                marginTop: "60px",
                marginBottom: "20px",
                textAlign: "center"
            }}>
                Please select one of the following actions upon arrival:
            </h2>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                maxWidth: "600px"
            }}>
                <button style={buttonStyle} onClick={handleButtonClick}>
                    User successfully helped
                </button>
                <button style={buttonStyle} onClick={handleButtonClick}>
                    Unable to help user
                </button>
                <button style={buttonStyle} onClick={handleButtonClick}>
                    User not found at location
                </button>
            </div>
        </div>
    );
};

// Button style shared across buttons
const buttonStyle = {
    backgroundColor: "#C1D8C3",
    color: "#000000",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    margin: "5px 0",
    cursor: "pointer",
    fontSize: "18px",
    width: "100%"
};

export default ConfirmInfo;
