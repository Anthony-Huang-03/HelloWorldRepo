import React from "react";
// import { Box, Heading } from "@chakra-ui/react";

const NoPeopleAvail = ({ message = "There are no people who need help right now. Thanks though!" }) => {
    return (
        <div>
            <h1>
                {message}
            </h1>
        </div>
    );
};

export default NoPeopleAvail;
