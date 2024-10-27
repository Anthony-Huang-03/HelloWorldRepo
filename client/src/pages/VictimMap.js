import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Center, Heading, Text, Alert, AlertIcon, Flex, Link } from "@chakra-ui/react";
import Map from '../components/Map';
import CarCrash from '../assets/CarCrash.png';
import AsianMan from '../assets/AsianMan.png';
import BadWeather from '../assets/BadWeather.png';
import eepy from '../assets/eepy.png';
import LimitedFood from '../assets/LimitedFood.png';
import OutOfFuel from '../assets/OutOfFuel.png';
import Background from '../assets/Background.jpeg';
import axios from "axios";

const VictimMap = () => {
    const [heroIsComing, setHeroIsComing] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { victim } = location.state || {};

    const [timeElapsed, setTimeElapsed] = useState(0);
    const [problemDescription, setProblemDescription] = useState(victim?.description || '');
    const [currentLocation, setCurrentLocation] = useState({ latitude: null, longitude: null });
    const [showTooltip, setShowTooltip] = useState(false);
    const [hero, setHero] = useState(null);
    const [isHeroComing, setIsHeroComing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`http://localhost:5010/api/victims/${victim._id}`)
                .then(res => setIsHeroComing(!!res.data.victim.heroId))
                .catch(console.log);
        };

        fetchData();

        if (isHeroComing) {
            axios.get(`http://localhost:5010/api/heros/${victim.heroId}`)
                .then(res => setHero(res.data.hero))
                .catch(console.log);
        }

        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }),
                (error) => console.error("Error getting location:", error)
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleClick2 = () => navigate("/");
    const handleClick3 = () => navigate("/RateAfterHelp", { state: { victim: victim } });

    return (
        <Flex
            direction="column"
            minHeight="100vh"
            bgImage={`url(${Background})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            color="black"
        >
            <Center flex="1" p={4}>
                <Box textAlign="center" p={6} borderRadius="md" boxShadow="lg" bg="white">
                    <Heading size="lg" mb={4}>You are here</Heading>

                    <Alert status="warning" mb={4}>
                        <AlertIcon />
                        If you are in immediate danger, please call 911!
                    </Alert>

                    <Box width="400px" height="300px" mb={4} overflow="hidden" mx="auto" p={4} borderRadius="md" boxShadow="md">
                        {currentLocation.latitude && currentLocation.longitude ? (
                            <Map position={currentLocation} icon={7}/>
                        ) : (
                            <Text>Loading map...</Text>
                        )}
                    </Box>

                    <Box p={4} borderRadius="md" boxShadow="md" mb={4}>
                        <Text mb={2}>Name: {victim.name}</Text>
                        <Text mb={2}>Email: {victim.contact}</Text>
                        <Text mb={4}>Problem Description: {problemDescription}</Text>
                    </Box>

                    <Flex justify="center" align="center" mb={4}>
                        <Box
                            bg="white"
                            p={2}
                            borderRadius="md"
                            boxShadow="md"
                            mr={4} // Adjust spacing here to move the box left or right
                        >
                            <Text color="black">{!heroIsComing ? "Help is on the way, please wait!" : `${hero.name} is on the way!`}</Text>
                        </Box>
                        <Button onClick={handleClick3} colorScheme="blue" ml={2}>Finish</Button>
                        <Button onClick={handleClick2} colorScheme="gray" ml={2}>Back</Button>
                    </Flex>

                    {/* Tooltip Question Mark Box */}
                    <Box
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        onClick={() => setShowTooltip(!showTooltip)}
                        cursor="pointer"
                        fontSize="24px"
                        color="black"
                        border="1px solid black"
                        borderRadius="md"
                        p={2}
                        bg="white"
                    >
                        ?
                    </Box>

                    {showTooltip && (
                        <Box
                            position="absolute"
                            bottom="60px"
                            left="20px"
                            p={3}
                            borderRadius="5px"
                            zIndex={1000}
                            bg="white"
                            color="black"
                            boxShadow="0 0 10px rgba(0,0,0,0.5)"
                        >
                            <Flex direction="column">
                                {[{ img: CarCrash, text: "Vehicle Problem" },
                                    { img: AsianMan, text: "Bored" },
                                    { img: BadWeather, text: "Bad Weather" },
                                    { img: eepy, text: "Driver Exhaustion" },
                                    { img: LimitedFood, text: "Limited Food" },
                                    { img: OutOfFuel, text: "Out of Fuel" }
                                ].map((item, idx) => (
                                    <Flex key={idx} direction="column" alignItems="center" mb={2}>
                                        <img src={item.img} alt={item.text} style={{ width: '80px' }} />
                                        <Text fontSize="sm">{item.text}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                    )}
                </Box>
            </Center>

            {/* Footer Contributors Box */}
            <Box p={4} borderRadius="md" mx="auto" width="fit-content" mb={4} textAlign="center" boxShadow="md" bg="white" color="black">
                <Text fontSize="sm">
                    Contributors:{" "}
                    <Link href="https://www.linkedin.com/in/jonnen-chong-22034620a/" isExternal textDecoration="underline">
                        Jonnen Chong
                    </Link>,{" "}
                    <Link href="https://www.linkedin.com/in/anthony-huang-171910321/" isExternal textDecoration="underline">
                        Anthony Huang
                    </Link>,{" "}
                    <Link href="https://www.linkedin.com/in/chan-nhu-pham-4876a127a/" isExternal textDecoration="underline">
                        Soleil Pham
                    </Link>, and{" "}
                    <Link href="https://www.linkedin.com/in/jonathan-pratt-1a1196286/" isExternal textDecoration="underline">
                        Jonathan Pratt
                    </Link> - 2024
                </Text>
            </Box>
        </Flex>
    );
};

export default VictimMap;
