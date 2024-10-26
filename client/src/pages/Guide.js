import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Guide = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start", // Keep content at the top
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#FFF5E4",
            height: "100vh",
            color: "#000000"
        }}>
            <div style={{
                backgroundColor: "#C1D8C3", // Light blue background color for the box
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                width: "80%",
                maxWidth: "600px",
                marginTop: "20px" // Margin from the top
            }}>
                <p style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    color: "#000000",
                }}>
                    Here is a guide on how to attempt to fix a flat tire yourself:
                </p>
                <a
                    href="https://example.com/your-guide-link" // Replace this URL with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontSize: "18px",
                        color: "#000000",
                        textDecoration: "underline"
                    }}
                >
                    Fix a Flat Tire Guide
                </a>
            </div>

            {/* Bottom Link for more help */}
            <div style={{
                marginTop: "20px", // Adjust this value to move the link up
                padding: "20px",
                textAlign: "center"
            }}>
                <Link
                    to="/VictimMap" // Adjust this path based on your routing setup
                    style={{
                        fontSize: "18px",
                        color: "#6A9C89", // Link color
                        textDecoration: "underline"
                    }}
                >
                    Still need help?
                </Link>
            </div>
        </div>
    );
};

export default Guide;
