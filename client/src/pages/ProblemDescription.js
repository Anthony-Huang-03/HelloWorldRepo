import { Box, Heading, Text, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon, Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import Background from "../assets/Background.jpeg"; // Import your background image

const ProblemDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [addedVictim, setAddedVictim] = useState(null);

    const { category, latitude, longitude } = location.state || {};

    const handleClick2 = () => {
        navigate('/');
    };

    const [victim, setVictim] = useState({
        category: category,
        description: "",
        name: "",
        contact: "",
        latitude: latitude,
        longitude: longitude
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVictim({
            ...victim,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            // Sending a POST request to add a new victim
            const response = await axios.post("http://localhost:5000/api/victims", victim);
            alert(response.data.message);
            navigate("/VictimMap", {
                state: { victim: response.data.victim }
            });
        } catch (error) {
            console.error("Error adding victim:", error);
            alert("There was an error adding the victim.");
        }
    };

    return (
        <Flex
            direction="column"
            minHeight="100vh"
            bgImage={`url(${Background})`}
            bgSize="cover"
            bgPosition="center"
        >
            <Box
                bg="white" // Fully opaque white background
                borderRadius="2xl" // More rounded edges
                p="6" // Increased padding for more height
                width="600px" // Adjusted width to match previous examples
                mx="auto" // Center the box horizontally
                mt="4" // Margin on top
                flex="1"
                textAlign="center"
                maxHeight="600px" // Further increased maximum height
                overflow="auto" // Enable scrolling if content exceeds height
            >
                <Heading size="lg" mb="4">What is your problem?</Heading> {/* Increased bottom margin */}

                {/* 911 Warning Alert */}
                <Alert status="warning" mb="4" justifyContent="center"> {/* Increased margin bottom */}
                    <AlertIcon />
                    If you are in immediate danger, please call 911!
                </Alert>

                <VStack spacing="4" as="form"> {/* Increased spacing for more vertical space */}
                    <FormControl>
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <Input
                            id="name"
                            name="name"
                            value={victim.name}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="contact">Email:</FormLabel>
                        <Input
                            id="contact"
                            name="contact"
                            value={victim.contact}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="description">Description:</FormLabel>
                        <Input
                            id="description"
                            name="description"
                            value={victim.description}
                            onChange={handleChange}
                        />
                    </FormControl>
                </VStack>

                {/* Wrap buttons in a VStack for consistent spacing */}
                <VStack spacing={4} mt="6">
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button onClick={handleClick2}>Back</Button>
                </VStack>
            </Box>
        </Flex>
    );
};

export default ProblemDescription;
