import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Button, VStack, HStack, Center, Flex, Link } from "@chakra-ui/react";
import Map from "../components/Map";
import axios from "axios";
import VehicleProblem from '../assets/CarCrash.png';
import Bored from '../assets/AsianMan.png';
import DriverExhaustion from '../assets/BadWeather.png';
import LimitedFood from '../assets/LimitedFood.png';
import OutOfFuel from '../assets/OutOfFuel.png';
import backgroundImg from '../assets/Background.jpeg'; // Replace with your actual background image path

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

        axios.get("http://localhost:5010/api/victims")
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
    const handleNext = () => {
        if (selectedVictim) {
            navigate("/Confirmation", {
                state: { latitude: location.latitude, longitude: location.longitude,
                    victim: selectedVictim }
            });
        } else {
            alert("Please select a victim first.");
        }
    };

    const handleMarkerSelect = (marker) => {
        setSelectedVictim(marker);
        console.log(marker);
    };

    return (
        <Box
            p="5"
            minH="100vh"
            textAlign="center"
            backgroundImage={backgroundImg} // Use your background image here
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Box
                background="white"
                borderRadius="xl"
                p="6"
                boxShadow="md"
                mb="6"
                position="relative" // Set to relative for positioning the question mark
            >
                <Heading size="lg" mb="6">
                    Please select someone to help:
                </Heading>

                <Center mb="8">
                    <Box width="400px" height="300px" overflow="hidden">
                        {location.latitude && location.longitude && victims ? (
                            <Map position={location} victims={victims} onMarkerSelect={handleMarkerSelect} icon={3}/>
                        ) : (
                            <Text>Loading map...</Text>
                        )}
                    </Box>
                </Center>

                <VStack spacing="4" mb="8" alignItems="center">
                    <Flex p="4" borderRadius="md" boxShadow="md" direction="column" alignItems="center">
                        <Text fontWeight="bold">Name:</Text>
                        <Text>{selectedVictim ? selectedVictim.name : "Select a victim"}</Text>
                    </Flex>
                    <Flex p="4" borderRadius="md" boxShadow="md" direction="column" alignItems="center">
                        <Text fontWeight="bold">Email:</Text>
                        <Text>{selectedVictim ? selectedVictim.contact : "Select a victim"}</Text>
                    </Flex>
                    <Flex p="4" borderRadius="md" boxShadow="md" direction="column" alignItems="center">
                        <Text fontWeight="bold">Time Spent Waiting:</Text>
                        <Text>{timeSpent}</Text>
                    </Flex>
                </VStack>

                <Box
                    position="absolute" // Move question mark box here
                    bottom="20px" // Adjust vertical position
                    left="20px" // Adjust horizontal position
                >
                    <Box
                        background="white" // Background color of the box
                        borderRadius="md"
                        boxShadow="md"
                        p="2"
                    >
                        <Text
                            onClick={() => setShowTooltip(!showTooltip)}
                            fontSize="24px"
                            cursor="pointer"
                        >
                            ?
                        </Text>
                    </Box>

                    {showTooltip && (
                        <Box
                            position="absolute"
                            bottom="40px" // Adjust distance from the question mark box
                            left="0"
                            background="white"
                            border="1px solid black"
                            padding="10px"
                            borderRadius="5px"
                            zIndex={1000}
                            boxShadow="0 0 10px rgba(0,0,0,0.5)"
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
                </Box>

                <Center>
                    <HStack spacing="4">
                        <Button onClick={handleBack}>Back</Button>
                        <Button onClick={handleNext}>Next</Button>
                    </HStack>
                </Center>
            </Box>

            {/* Contributors Box */}
            <Box
                border="1px"
                borderColor="gray.200"
                borderRadius="2xl"
                p="4"
                mt="6"
                textAlign="center"
                bg="white" // Fully opaque white background
                mx="auto" // Center horizontally
                width="600px" // Match the width of the main content box
            >
                <Text fontSize="sm" color="gray.500">
                    Contributors:{" "}
                    <Link href="https://www.linkedin.com/in/jonnen-chong-22034620a/" isExternal color="blue.500" textDecoration="underline">
                        Jonnen Chong
                    </Link>,{" "}
                    <Link href="https://www.linkedin.com/in/anthony-huang-171910321/" isExternal color="blue.500" textDecoration="underline">
                        Anthony Huang
                    </Link>,{" "}
                    <Link href="https://www.linkedin.com/in/chan-nhu-pham-4876a127a/" isExternal color="blue.500" textDecoration="underline">
                        Soleil Pham
                    </Link>, and{" "}
                    <Link href="https://www.linkedin.com/in/jonathan-pratt-1a1196286/" isExternal color="blue.500" textDecoration="underline">
                        Jonathan Pratt
                    </Link> - 2024
                </Text>
            </Box>
        </Box>
    );
};

export default HeroSelection;
