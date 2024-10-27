import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import TypewriterAndInverseEffect from './TypewriterAndInverseEffect';
import { useNavigate } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Box, Button, Heading, Text, VStack, Center } from "@chakra-ui/react";
import Map from "../components/Map";

const Home = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/ProblemIdentification");
    };
    const handleClick2 = () => {
        navigate("/HeroSelection");
    };
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    const rootElement = document.getElementById("root");

    const root = createRoot(rootElement);

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
                <Heading size="xl" mb="4"> <TypewriterAndInverseEffect
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
