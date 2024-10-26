import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack, Center } from "@chakra-ui/react";
import Map from "../components/Map";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/ProblemIdentification");
    };
    const handleClick2 = () => {
        navigate("/HeroSelection");
    };
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [victims, setVictims] = useState(null);

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

        axios.get("http://localhost:5000/api/victims")
            .then(res => {
                setVictims(res.data.victims);
                console.log(res.data.victims);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <Box p="4" textAlign="center">
            <Heading size="xl" mb="4">Do you need help?</Heading>

            <Center mb="4">
                {location.latitude && location.longitude && victims ? (
                    <Map position={location} victims={victims} /> // Render the Map with the current location
                ) : (
                    <Text>Loading map...</Text>
                )}
            </Center>

            <VStack spacing="4">
                <Button onClick={handleClick1}>Yes</Button>
                <Button onClick={handleClick2}>No</Button>
            </VStack>
        </Box>
    );
};

export default Home;
