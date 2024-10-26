import React from "react";
// import { Box, Heading } from "@chakra-ui/react";

const NoPeopleAvail = ({ message = "There are no people who need help right now. Thanks though!" }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            background: "linear-gradient(to right, #FFF5E4, #C1D8C3)",
            fontFamily: "Arial, sans-serif"
        }}>
            <h1 style={{
                color: "#CD5C08",
                backgroundColor: "#6A9C89",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
            }}>
                {message}
            </h1>
        </div>
    );
};

export default NoPeopleAvail;
