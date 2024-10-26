import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Guide = () => {
    return (
        <div>
            <div>
                <p>Here is a guide on how to attempt to fix a flat tire yourself:</p>
                <a
                    href="https://example.com/your-guide-link" // Replace this URL with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fix a Flat Tire Guide
                </a>
            </div>

            {/* Bottom Link for more help */}
            <div>
                <Link
                    to="/VictimMap" // Adjust this path based on your routing setup
                >
                    Still need help?
                </Link>
            </div>
        </div>
    );
};

export default Guide;
