import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Center, Heading, Text, Input, Alert, AlertIcon, Flex } from "@chakra-ui/react";
import Map from '../components/Map'; // Ensure the Map component is imported

const VictimMap = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [helpSent, setHelpSent] = useState(false); // State to track if help request has been sent
    const [timeElapsed, setTimeElapsed] = useState(0); // State to track time elapsed

    const [name, setName] = useState(''); // State for name input
    const [email, setEmail] = useState(''); // State for email input
    const [problemDescription, setProblemDescription] = useState(''); // State for problem description input

    const { victim } = location.state || {};

    console.log(victim);
    
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
                    {location.latitude && location.longitude ? (
                        <Map position={location} />
                    ) : (
                        <Text>Loading map...</Text>
                    )}
                </Box>

                {/* Input fields for name, email, and problem description */}
                <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    mb={4}
                />
                <Input
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    mb={4}
                />
                <Input
                    placeholder="Your Problem Description"
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    mb={4}
                />

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
