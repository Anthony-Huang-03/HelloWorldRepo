import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Center, Heading, Text, Alert, AlertIcon, Flex } from "@chakra-ui/react";
import Map from '../components/Map'; // Ensure the Map component is imported
import CarCrash from '../assets/CarCrash.png';
import AsianMan from '../assets/AsianMan.png';
import BadWeather from '../assets/BadWeather.png';
import eepy from '../assets/eepy.png';
import LimitedFood from '../assets/LimitedFood.png';
import OutOfFuel from '../assets/OutOfFuel.png';

const VictimMap = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { victim } = location.state || {};

    const [helpSent, setHelpSent] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [name, setName] = useState(victim?.name || '');
    const [email, setEmail] = useState(victim?.email || '');
    const [problemDescription, setProblemDescription] = useState(victim?.description || '');
    const [currentLocation, setCurrentLocation] = useState({ latitude: null, longitude: null });
    const [showTooltip, setShowTooltip] = useState(false);

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

                <Alert status="warning" mb={4}>
                    <AlertIcon />
                    If you are in immediate danger, please call 911!
                </Alert>

                <Box width="400px" height="300px" mb={4} overflow="hidden" mx="auto">
                    {currentLocation.latitude && currentLocation.longitude ? (
                        <Map position={currentLocation} />
                    ) : (
                        <Text>Loading map...</Text>
                    )}
                </Box>

                <Text mb={2}>Name: {name}</Text>
                <Text mb={2}>Email: {email}</Text>
                <Text mb={4}>Problem Description: {problemDescription}</Text>

                <Flex justify="center" mb={2}>
                    {!helpSent ? (
                        <Button onClick={handleClick1} mr={4}>Send Help!</Button>
                    ) : (
                        <Text mb={4}>Help request sent! Time elapsed: {timeElapsed} seconds</Text>
                    )}
                    <Button onClick={handleClick2}>Back</Button>
                </Flex>

                {/* Clickable question mark for tooltip */}
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

                {/* Tooltip with images and descriptions */}
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
                            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        <Flex direction="column">
                            <Box mb={2}>
                                <img src={CarCrash} alt="Description 1" style={{ width: '100px' }} />
                                <Text>Description 1</Text>
                            </Box>
                            <Box mb={2}>
                                <img src={AsianMan} alt="Description 2" style={{ width: '100px' }} />
                                <Text>Description 2</Text>
                            </Box>
                            <Box mb={2}>
                                <img src={BadWeather} alt="Description 3" style={{ width: '100px' }} />
                                <Text>Description 3</Text>
                            </Box>
                            <Box mb={2}>
                                <img src={eepy} alt="Description 4" style={{ width: '100px' }} />
                                <Text>Description 4</Text>
                            </Box>
                            <Box mb={2}>
                                <img src={LimitedFood} alt="Description 5" style={{ width: '100px' }} />
                                <Text>Description 5</Text>
                            </Box>
                            <Box mb={2}>
                                <img src={OutOfFuel} alt="Description 6" style={{ width: '100px' }} />
                                <Text>Description 6</Text>
                            </Box>
                        </Flex>
                    </Box>
                )}
            </Box>
        </Center>
    );
};

export default VictimMap;
