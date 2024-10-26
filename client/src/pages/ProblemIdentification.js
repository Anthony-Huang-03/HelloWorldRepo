import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack, Center, Alert, AlertIcon, Link, Flex } from "@chakra-ui/react";
import Map from "../components/Map"; // Ensure this is the correct path for your Map component
import Background from "../assets/Background.jpeg"; // Import your background image

const ProblemIdentification = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    // Geolocation logic to get user's current position
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

    const handleClick1 = (val) => {
        navigate("/ProblemDescription", {
            state: { category: val, latitude: location.latitude, longitude: location.longitude }
        });
    };
    const handleClick2 = () => {
        navigate("/");
    };

    return (
        <Flex direction="column" minHeight="100vh" bgImage={`url(${Background})`} bgSize="cover" bgPosition="center">
            {/* Main Content Box */}
            <Box
                bg="white" // Fully opaque white background
                borderRadius="2xl" // More rounded edges
                p="4"
                width="600px" // Adjusted width to match previous example
                mx="auto" // Center the box horizontally
                mt="4" // Margin on top
                flex="1"
            >
                <Box textAlign="center">
                    <Heading size="xl" mb="4">What is your problem?</Heading>

                    {/* Centered Alert */}
                    <Center mb="4">
                        <Alert status="warning" width="100%" maxWidth="600px" mx="auto">
                            <AlertIcon />
                            If you are in immediate danger, please call 911!
                        </Alert>
                    </Center>

                    <Center mb="4">
                        {location.latitude && location.longitude ? (
                            <Map position={location} />
                        ) : (
                            <Text>Loading map...</Text>
                        )}
                    </Center>

                    <Text mb="4">Please select a category:</Text>

                    <VStack spacing="4">
                        <Button onClick={() => handleClick1("Vehicle Breakdowns")}>Vehicle Breakdowns</Button>
                        <Button onClick={() => handleClick1("Limited Food Options")}>Limited Food Options</Button>
                        <Button onClick={() => handleClick1("Bad Weather Conditions")}>Bad Weather Conditions</Button>
                        <Button onClick={() => handleClick1("Running Out of Fuel")}>Running Out of Fuel</Button>
                        <Button onClick={() => handleClick1("Boredom")}>Boredom</Button>
                        <Button onClick={() => handleClick1("Fatigue and Driver Exhaustion")}>Fatigue and Driver Exhaustion</Button>
                        <Button onClick={handleClick2}>Back</Button>
                    </VStack>
                </Box>
            </Box>

            {/* Footer Box */}
            <Box
                border="1px"
                borderColor="gray.200"
                borderRadius="2xl" // More rounded edges
                p="4"
                mt="6"
                textAlign="center"
                bg="white" // Fully opaque white background
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
        </Flex>
    );
};

export default ProblemIdentification;
