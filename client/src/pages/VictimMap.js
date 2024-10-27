import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Center, Heading, Text, Alert, AlertIcon, Flex, Link } from "@chakra-ui/react";
import Map from '../components/Map'; // Ensure the Map component is imported
import CarCrash from '../assets/CarCrash.png';
import AsianMan from '../assets/AsianMan.png';
import BadWeather from '../assets/BadWeather.png';
import eepy from '../assets/eepy.png';
import LimitedFood from '../assets/LimitedFood.png';
import OutOfFuel from '../assets/OutOfFuel.png';
import axios from "axios";

const VictimMap = () => {

    const [heroIsComing, setHeroIsComing] = useState(false);

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

    const [isHeroComing, setIsHeroComing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`http://localhost:5000/api/victims/${victim._id}`)
                .then(res => {
                    console.log("Pinged" + !!res.data.victim.heroId);
                    setIsHeroComing(!!res.data.victim.heroId);
                })
                .catch(err => {
                    console.log(err);
                });
        };

        fetchData();

        // Set up an interval to fetch data every 5 seconds
        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);
    }, []);


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
        <Flex direction="column" minHeight="100vh">
            <Center flex="1" p={4}>
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
                            <Map position={currentLocation} icon={7}/>
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
                            <div>
                                <Text mb={4}>Help request sent! Time elapsed: {timeElapsed} seconds</Text>
                                {isHeroComing ?
                                    <Text mb={4}>A hero is coming!</Text> : null}
                            </div>
                        )}
                        <Button onClick={handleClick2}>Back</Button>
                        {isHeroComing ?
                            <Button onClick={() => {
                                console.log("FINISHHHHH WOOO");
                            }}>Finish</Button> : null}
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
                                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                            }}
                        >
                            <Flex direction="column">
                                <Flex direction="column" alignItems="center" mb={2}>
                                    <img src={CarCrash} alt="Vehicle Problem" style={{ width: '80px' }} />
                                    <Text fontSize="sm">Vehicle Problem</Text>
                                </Flex>
                                <Flex direction="column" alignItems="center" mb={2}>
                                    <img src={AsianMan} alt="Bored" style={{ width: '80px' }} />
                                    <Text fontSize="sm">Bored</Text>
                                </Flex>
                                <Flex direction="column" alignItems="center" mb={2}>
                                    <img src={BadWeather} alt="Bad Weather" style={{ width: '80px' }} />
                                    <Text fontSize="sm">Bad Weather</Text>
                                </Flex>
                                <Flex direction="column" alignItems="center" mb={2}>
                                    <img src={eepy} alt="Driver Exhaustion" style={{ width: '80px' }} />
                                    <Text fontSize="sm">Driver Exhaustion</Text>
                                </Flex>
                                <Flex direction="column" alignItems="center" mb={2}>
                                    <img src={LimitedFood} alt="Limited Food" style={{ width: '80px' }} />
                                    <Text fontSize="sm">Limited Food</Text>
                                </Flex>
                                <Flex direction="column" alignItems="center" mb={2}>
                                    <img src={OutOfFuel} alt="Out of Fuel" style={{ width: '80px' }} />
                                    <Text fontSize="sm">Out of Fuel</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    )}
                </Box>
            </Center>

            {/* Footer */}
            <Text fontSize="sm" color="gray.500" textAlign="center" mb="4">
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
        </Flex>
    );
};

export default VictimMap;
