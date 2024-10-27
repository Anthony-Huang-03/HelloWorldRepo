import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const NoPeopleAvail = ({ message = "There are no people who need help right now. Thanks though!" }) => {
    return (
        <Box textAlign="center" p="4">
            <Heading size="md">{message}</Heading>
        </Box>
    );
};

export default NoPeopleAvail;