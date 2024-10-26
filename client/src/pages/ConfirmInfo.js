import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Heading,
    Text,
    VStack,
    Button
} from "@chakra-ui/react";

const ConfirmInfo = ({ userName, userEmail, problemDescription }) => {
    const navigate = useNavigate();

    // Function to handle button clicks
    const handleButtonClick = () => {
        navigate("/Completed");
    };

    return (
        <Box p="6" minH="100vh" textAlign="center">
            <Heading size="lg" mb="4">Selection Confirmed!</Heading>
            <Text fontSize="lg" mb="8">
                Email notification sent to the selected user.
            </Text>

            <VStack align="stretch" spacing="4" maxW="600px" mx="auto">
                <Text fontSize="lg">
                    <strong>User Name:</strong> {userName || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>User Email:</strong> {userEmail || "Loading..."}
                </Text>
                <Text fontSize="lg"><strong>Problem Description:</strong></Text>
                <Box
                    p="4"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    minH="100px"
                    overflowY="auto"
                    fontSize="md"
                >
                    {problemDescription || "Loading..."}
                </Box>
            </VStack>

            <Heading size="md" mt="12" mb="4">
                Please select one of the following actions upon arrival:
            </Heading>

            <VStack spacing="4" maxW="600px" mx="auto" w="full">
                <Button onClick={handleButtonClick} w="full">
                    User successfully helped
                </Button>
                <Button onClick={handleButtonClick} w="full">
                    Unable to help user
                </Button>
                <Button onClick={handleButtonClick} w="full">
                    User not found at location
                </Button>
            </VStack>
        </Box>
    );
};

export default ConfirmInfo;
