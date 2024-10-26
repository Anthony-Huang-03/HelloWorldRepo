import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack, Center, Alert, AlertIcon } from "@chakra-ui/react";
import Map from "../components/Map"; // Ensure this is the correct path for your Map component

const ProblemIdentification = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    // Geolocation logic to get user's current position
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleClick1 = () => {
        navigate("/ProblemDescription");
    };
    const handleClick2 = () => {
        navigate("/");
    };

    return (
        <Box p="4" textAlign="center">
            <Heading size="xl" mb="4">What is your problem?</Heading>

            {/* Centered Alert */}
            <Center mb="4">
                <Alert status="warning" width="100%" maxWidth="600px" mx="auto">
                    <AlertIcon />
                    If you are in immediate danger, please call 911!
                </Alert>
            </Center>

            <Center mb="4">
                {location.latitude && location.longitude ? (
                    <Map position={location} /> // Render the Map with the current location
                ) : (
                    <Text>Loading map...</Text>
                )}
            </Center>

            <Text mb="4">Please select a category:</Text>

            <VStack spacing="4">
                <Button onClick={handleClick1}>Vehicle Breakdowns</Button>
                <Button onClick={handleClick1}>Limited Food Options</Button>
                <Button onClick={handleClick1}>Bad Weather Conditions</Button>
                <Button onClick={handleClick1}>Running Out of Fuel</Button>
                <Button onClick={handleClick1}>Boredom</Button>
                <Button onClick={handleClick1}>Fatigue and Driver Exhaustion</Button>
                <Button onClick={handleClick2}>Back</Button>
            </VStack>
        </Box>
    );
};

export default ProblemIdentification;
