import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack, Center, Link, Flex, Image } from "@chakra-ui/react";
import Map from "../components/Map";
import TypewriterAndInverseEffect from './TypewriterAndInverseEffect';
import Background from "../assets/Background.jpeg";
import Logo from "../assets/roadieRescueLogo.png";
import Footer from "../components/Footer"; // Import the logo

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
        <Box
            bgImage={`url(${Background})`}
            bgSize="cover"
            bgPosition="center"
            minHeight="100vh"
            p="4"
        >
            <Flex direction="column" minHeight="100vh" p="4">
                {/* Main Content Box */}
                <Box
                    bg="white" // Fully opaque white background
                    borderRadius="2xl" // Much more rounded edges
                    p="4" // Increased padding for a more spacious feel
                    width="600px" // Adjusted width to decrease horizontal size again
                    mx="auto" // Center the box horizontally
                    mt="4" // Margin on top
                    position="relative" // Set position relative for absolute positioning of logo
                >
                    {/* Logo positioned at the top left */}
                    <Image
                        src={Logo}
                        alt="Roadie Rescue Logo"
                        boxSize="150px" // Increased size for a larger logo
                        position="absolute"
                        top="10px" // Adjust vertical position
                        left="10px" // Adjust horizontal position
                        transform="translate(-50%, -50%)" // Center the image at the corner
                    />

                    <Box textAlign="center" pt="10"> {/* Add padding to push content down */}
                        <Heading size="xl" mb="2"> {/* Reduced margin-bottom */}
                            <TypewriterAndInverseEffect
                                lines={[
                                    "Welcome to Roadie Rescue",
                                    "Do you need help?",
                                ]}
                                speed={50} pauseDuration={1000}
                            />
                        </Heading>

                        <Center mb="2"> {/* Reduced margin-bottom */}
                            {location.latitude && location.longitude ? (
                                <Map position={location} icon={7} />
                            ) : (
                                <Text>Loading map...</Text>
                            )}
                        </Center>

                        <VStack spacing="4">
                            <Button onClick={handleClick1}>Yes</Button>
                            <Button onClick={handleClick2}>No</Button>
                        </VStack>
                    </Box>
                </Box>

                {/* Contributors Box */}
                <Footer>

                </Footer>
            </Flex>
        </Box>
    );
};

export default Home;
