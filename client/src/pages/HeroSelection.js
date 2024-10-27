import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Button, VStack, HStack, Center, Flex } from "@chakra-ui/react";
import Map from "../components/Map";
import axios from "axios";
import VehicleProblem from '../assets/CarCrash.png';
import Bored from '../assets/AsianMan.png';
import DriverExhaustion from '../assets/BadWeather.png';
import LimitedFood from '../assets/LimitedFood.png';
import OutOfFuel from '../assets/OutOfFuel.png';

const HeroSelection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [timeSpent, setTimeSpent] = useState("");
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [victims, setVictims] = useState(null);
    const [selectedVictim, setSelectedVictim] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        setName("John Doe");
        setEmail("john.doe@example.com");
        setTimeSpent("5 minutes");

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
        console.log(marker);
    }

    return (
        <Box p="5" minH="100vh" textAlign="center">
            <Heading size="lg" mb="6">
                Please select someone to help:
            </Heading>

            <Center mb="8">
                <Box width="400px" height="300px" overflow="hidden">
                    {location.latitude && location.longitude && victims ? (
                        <Map position={location} victims={victims} onMarkerSelect={handleMarkerSelect} />
                    ) : (
                        <Text>Loading map...</Text>
                    )}
                </Box>
            </Center>

            <VStack spacing="4" mb="8" alignItems="center">
                <Flex p="4" borderRadius="md" boxShadow="md" direction="column" alignItems="center">
                    <Text fontWeight="bold">Name:</Text>
                    <Text>{name}</Text>
                </Flex>
                <Flex p="4" borderRadius="md" boxShadow="md" direction="column" alignItems="center">
                    <Text fontWeight="bold">Email:</Text>
                    <Text>{email}</Text>
                </Flex>
                <Flex p="4" borderRadius="md" boxShadow="md" direction="column" alignItems="center">
                    <Text fontWeight="bold">Time Spent Waiting:</Text>
                    <Text>{timeSpent}</Text>
                </Flex>
            </VStack>

            <Box
                onClick={() => setShowTooltip(!showTooltip)}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    cursor: 'pointer',
                    fontSize: '24px',
                }}
            >
                ?
            </Box>

            {showTooltip && (
                <Box
                    style={{
                        position: 'absolute',
                        bottom: '60px',
                        left: '20px',
                        background: 'white',
                        border: '1px solid black',
                        padding: '10px',
                        borderRadius: '5px',
                        zIndex: 1000,
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    }}
                >
                    <Flex direction="column" alignItems="center">
                        <Box mb={2} textAlign="center">
                            <img src={VehicleProblem} alt="Vehicle Problem" style={{ width: '80px', marginBottom: '5px', marginLeft: 'auto', marginRight: 'auto' }} />
                            <Text fontSize="sm">Vehicle Problem</Text>
                        </Box>
                        <Box mb={2} textAlign="center">
                            <img src={Bored} alt="Bored" style={{ width: '80px', marginBottom: '5px', marginLeft: 'auto', marginRight: 'auto' }} />
                            <Text fontSize="sm">Bored</Text>
                        </Box>
                        <Box mb={2} textAlign="center">
                            <img src={DriverExhaustion} alt="Driver Exhaustion" style={{ width: '80px', marginBottom: '5px', marginLeft: 'auto', marginRight: 'auto' }} />
                            <Text fontSize="sm">Driver Exhaustion</Text>
                        </Box>
                        <Box mb={2} textAlign="center">
                            <img src={LimitedFood} alt="Limited Food" style={{ width: '80px', marginBottom: '5px', marginLeft: 'auto', marginRight: 'auto' }} />
                            <Text fontSize="sm">Limited Food</Text>
                        </Box>
                        <Box mb={2} textAlign="center">
                            <img src={OutOfFuel} alt="Out of Fuel" style={{ width: '80px', marginBottom: '5px', marginLeft: 'auto', marginRight: 'auto' }} />
                            <Text fontSize="sm">Out of Fuel</Text>
                        </Box>
                    </Flex>
                </Box>
            )}

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
