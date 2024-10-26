import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";

const HeroSelection = () => {
    // State to hold fetched data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [timeSpent, setTimeSpent] = useState("");

    // Simulate data fetching
    useEffect(() => {
        setName("John Doe");
        setEmail("john.doe@example.com");
        setTimeSpent("5 minutes");
    }, []);

    const navigate = useNavigate();

    // Handlers for navigation buttons
    const handleBack = () => navigate("/Home");
    const handleNext = () => navigate("/ConfirmInfo");

    return (
        <Box p="5" minH="100vh" textAlign="center">
            <Heading size="lg" mb="6">
                Please select someone to help:
            </Heading>

            <VStack spacing="4" mb="8">
                <Box p="4" borderRadius="md" boxShadow="md">
                    <Text><strong>Name:</strong> {name}</Text>
                </Box>
                <Box p="4" borderRadius="md" boxShadow="md">
                    <Text><strong>Email:</strong> {email}</Text>
                </Box>
                <Box p="4" borderRadius="md" boxShadow="md">
                    <Text><strong>Time Spent Waiting:</strong> {timeSpent}</Text>
                </Box>
            </VStack>

            <HStack spacing="4">
                <Button onClick={handleBack}>
                    Back
                </Button>
                <Button onClick={handleNext}>
                    Next
                </Button>
            </HStack>
        </Box>
    );
};

export default HeroSelection;
