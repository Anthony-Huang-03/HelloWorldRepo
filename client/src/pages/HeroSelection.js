import React, { useState, useEffect } from "react";

const HeroSelection = () => {
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
        <div>
            <h1>
                Please select someone to help:
            </h1>

            <div>
                {/* Name Box */}
                <div>
                    Name: {name}
                </div>

                {/* Email Box */}
                <div>
                    Email: {email}
                </div>

                {/* Time Spent Waiting Box */}
                <div>
                    Time Spent Waiting: {timeSpent}
                </div>
            </div>
        </div>
    );
};

export default HeroSelection;
