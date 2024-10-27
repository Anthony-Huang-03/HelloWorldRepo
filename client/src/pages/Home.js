import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack, Center } from "@chakra-ui/react";
import Map from "../components/Map";
import TypewriterAndInverseEffect from './TypewriterAndInverseEffect';


const Home = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/ProblemIdentification");
    };
    const handleClick2 = () => {
        navigate("/HeroSelection");
    };
    const [location, setLocation] = useState({ latitude: null, longitude: null });

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

    return (
        <Box p="4" textAlign="center">
            <Heading size="xl" mb="4"><TypewriterAndInverseEffect
            lines={[
            "Welcome to Roadie Rescue",
            "Do you need help?",
            ]}
            speed={50} pauseDuration={1000}/> </Heading>

            <Center mb="4">
                {location.latitude && location.longitude ? (
                    <Map position={location} />
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
