import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack, Center, Link, Flex } from "@chakra-ui/react";
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
        <Flex direction="column" minHeight="100vh" p="4">
            <Box textAlign="center" flex="1">
                <Heading size="xl" mb="4">
                    <TypewriterAndInverseEffect
                        lines={[
                            "Welcome to Roadie Rescue",
                            "Do you need help?",
                        ]}
                        speed={50} pauseDuration={1000}
                    />
                </Heading>

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

            {/* Footer */}
            <Text fontSize="sm" color="gray.500" textAlign="center" mt="6">
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

export default Home;
