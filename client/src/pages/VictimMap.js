import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Center, Heading, Text, Alert, AlertIcon, Flex } from "@chakra-ui/react";
import Map from '../components/Map'; // Ensure the Map component is imported

const VictimMap = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { victim } = location.state || {};

    const [helpSent, setHelpSent] = useState(false); // State to track if help request has been sent
    const [timeElapsed, setTimeElapsed] = useState(0); // State to track time elapsed

    // Use victim's info if available
    const [name, setName] = useState(victim?.name || '');
    const [email, setEmail] = useState(victim?.email || '');
    const [problemDescription, setProblemDescription] = useState(victim?.description || '');

    const [currentLocation, setCurrentLocation] = useState({ latitude: null, longitude: null });

    console.log(victim);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
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

    useEffect(() => {
        let timer;
        if (helpSent) {
            timer = setInterval(() => {
                setTimeElapsed((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [helpSent]);

    const handleClick1 = () => {
        setHelpSent(true);
    };

    const handleClick2 = () => {
        navigate("/");
    };

    return (
        <Center height="100vh" p={4}>
            <Box textAlign="center">
                <Heading size="lg" mb={4}>
                    You are here
                </Heading>

                {/* 911 Alert */}
                <Alert status="warning" mb={4}>
                    <AlertIcon />
                    If you are in immediate danger, please call 911!
                </Alert>

                {/* Centered Larger Map */}
                <Box width="400px" height="300px" mb={4} overflow="hidden" mx="auto">
                    {currentLocation.latitude && currentLocation.longitude ? (
                        <Map position={currentLocation} />
                    ) : (
                        <Text>Loading map...</Text>
                    )}
                </Box>

                {/* Display victim's name, email, and problem description */}
                <Text mb={2}>Name: {name}</Text>
                <Text mb={2}>Email: {email}</Text>
                <Text mb={4}>Problem Description: {problemDescription}</Text>

                {/* Buttons with horizontal space between them */}
                <Flex justify="center" mb={2}>
                    {!helpSent ? (
                        <Button onClick={handleClick1} mr={4}>Send Help!</Button> // Added margin right
                    ) : (
                        <Text mb={4}>Help request sent! Time elapsed: {timeElapsed} seconds</Text>
                    )}

                    <Button onClick={handleClick2}>Back</Button>
                </Flex>
            </Box>
        </Center>
    );
};

export default VictimMap;