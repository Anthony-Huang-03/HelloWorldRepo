import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Completed = ({ commission }) => { // Receive commission as a prop
    return (
        <Box textAlign="center" p="5">
            <Heading size="lg" mb="4">Thanks for helping!</Heading>

            <Text fontSize="lg" mb="6">
                <strong>Commission:</strong> {commission || "Loading..."}
            </Text>

            <Button as={Link} to="/Home" colorScheme="teal" variant="solid">
                Go to Home
            </Button>
        </Box>
    );
};

export default Completed;
