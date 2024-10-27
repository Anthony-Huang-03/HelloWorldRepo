import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Button, VStack, HStack, Center } from "@chakra-ui/react";
import Map from "../components/Map";
import axios from "axios"; // Ensure the Map component is correctly imported

const HeroSelection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [timeSpent, setTimeSpent] = useState("");
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [victims, setVictims] = useState(null);
    const [selectedVictim, setSelectedVictim] = useState(null);

    useEffect(() => {
        // Simulate data fetching
        setName("John Doe");
        setEmail("john.doe@example.com");
        setTimeSpent("5 minutes");

        // Fetch geolocation
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

        axios.get("http://localhost:5000/api/victims")
            .then(res => {
                setVictims(res.data.victims);
                console.log(res.data.victims);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const navigate = useNavigate();

    const handleBack = () => navigate("/Home");
    const handleNext = () => navigate("/ConfirmInfo");

    const handleMarkerSelect = (marker) => {
        setSelectedVictim(marker);
        console.log(marker); // This will log the actual DOM element
    }

    return (
        <Box p="5" minH="100vh" textAlign="center">
            <Heading size="lg" mb="6">
                Please select someone to help:
            </Heading>

            {/* Map container */}
            <Center mb="8">
                <Box width="400px" height="300px" overflow="hidden">
                    {location.latitude && location.longitude && victims ? (
                        <Map position={location} victims={victims} onMarkerSelect={handleMarkerSelect} />
                    ) : (
                        <Text>Loading map...</Text>
                    )}
                </Box>
            </Center>

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

            {/* Centered Buttons */}
            <Center>
                <HStack spacing="4">
                    <Button onClick={handleBack}>Back</Button>
                    <Button onClick={handleNext}>Next</Button>
                </HStack>
            </Center>
        </Box>
    );
};

export default HeroSelection;