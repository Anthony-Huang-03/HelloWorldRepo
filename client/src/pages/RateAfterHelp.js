import React, { useState } from "react";

const RateAfterHelp = () => {
    const [rating, setRating] = useState(0); // State to hold the star rating
    const [confirmVisible, setConfirmVisible] = useState(false); // State to control confirm dialog visibility
    const [isConfirmed, setIsConfirmed] = useState(false); // State to track if rating is confirmed

    const handleStarClick = (index) => {
        if (!isConfirmed) {
            setRating(index + 1);
            setConfirmVisible(true); // Show confirm button when a star is clicked
        }
    };

    const handleConfirm = () => {
        setIsConfirmed(true); // Set rating as confirmed
        setConfirmVisible(false); // Hide confirm dialog
    };

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
            <h1 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>
                Rate this guide/helper:
            </h1>

            <div style={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center"
            }}>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleStarClick(index)}
                        style={{
                            fontSize: "40px",
                            cursor: isConfirmed ? "default" : "pointer",
                            color: index < rating ? "#FFD700" : "#C1D8C3" // Gold for selected, light color for unselected
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>

            {confirmVisible && !isConfirmed && ( // Show confirm dialog only if not confirmed
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                    <p>Confirm rating?</p>
                    <button onClick={handleConfirm} style={buttonStyle}>Yes</button>
                </div>
            )}

            <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
                Please select one of the following actions:
            </h2>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                maxWidth: "400px"
            }}>
                <button style={buttonStyle} disabled={isConfirmed}>Helped by Helper</button>
                <button style={buttonStyle} disabled={isConfirmed}>Helped by Others</button>
                <button style={buttonStyle} disabled={isConfirmed}>Self-helped</button>
                <button style={buttonStyle} disabled={isConfirmed}>Problem resolved itself</button>
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

export default RateAfterHelp;
