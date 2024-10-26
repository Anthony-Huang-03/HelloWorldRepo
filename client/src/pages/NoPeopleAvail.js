import React from "react";
// import { Box, Heading } from "@chakra-ui/react";

const NoPeopleAvail = ({ message = "There are no people who need help right now. Thanks anyways!" }) => {
    return (
        <div
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            bgGradient="linear(to-r, #FFF5E4, #C1D8C3)"
            color="#CD5C08"
        >
            <h1 fontSize="4xl" p={6} bg="#6A9C89" borderRadius="md" boxShadow="lg">
                {message}
            </h1>
        </div>
    );
};

export default NoPeopleAvail;
