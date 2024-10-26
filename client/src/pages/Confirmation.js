import React, { useState, useEffect } from "react";

const Confirmation = () => {
    // State to hold fetched data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [timeSpent, setTimeSpent] = useState("");

    // Simulate data fetching
    useEffect(() => {
        // You could replace this with a real API call
        setName("John Doe");
        setEmail("john.doe@example.com");
        setTimeSpent("5 minutes");
    }, []);

    return (
        <div style={{
            display: "flex-end",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px",
            backgroundColor: "#FFFFFF",
            height: "100vh"
        }}>
            <h1 style={{
                fontSize: "24px",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#FFFFFF",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
            }}>
                Are you sure you want to confirm? (Help-seeker will be notified and given your contact info)
            </h1>

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "auto",
                width: "100%"
            }}>
                {/* Name Box */}
                <div style={{
                    backgroundColor: "#FFFFFF",
                    padding: "15px",
                    margin: "15px",
                    width: "80%",
                    textAlign: "center",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }}>
                    Name: {name}
                </div>

                {/* Email Box */}
                <div style={{
                    backgroundColor: "#FFFFFF",
                    padding: "15px",
                    margin: "15px",
                    width: "80%",
                    textAlign: "center",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }}>
                    Email: {email}
                </div>

                {/* Time Spent Waiting Box */}
                <div style={{
                    backgroundColor: "#FFFFFF",
                    padding: "15px",
                    margin: "10px",
                    width: "80%",
                    textAlign: "center",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }}>
                    Time Spent Waiting: {timeSpent}
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
