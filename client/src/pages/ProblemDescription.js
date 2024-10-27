import { Box, Heading, Text, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon, Link, Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";

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
            const response = await axios.post("/api/victims", victim);
            alert(response.data.message);
        } catch (error) {
            console.error("Error adding victim:", error);
            alert("There was an error adding the victim.");
            navigate('/VictimMap');
        }
        navigate('/VictimMap');
    };

    return (
        <Flex direction="column" minHeight="100vh">
            <Box textAlign="center" p="6" flex="1">
                <Heading size="lg" mb="4">What is your problem?</Heading>

                {/* 911 Warning Alert */}
                <Alert status="warning" mb="4" justifyContent="center">
                    <AlertIcon />
                    If you are in immediate danger, please call 911!
                </Alert>

                <VStack spacing="4" as="form">
                    <FormControl>
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <Input type="text" id="name" name="name" value={victim.name} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="contact">Email:</FormLabel>
                        <Input type="text" id="contact" name="contact" value={victim.contact} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="description">Description:</FormLabel>
                        <Input type="text" id="description" name="description" value={victim.description} onChange={handleChange} />
                    </FormControl>

                    <Button onClick={handleSubmit} type="submit">Submit</Button>
                </VStack>
                <Button onClick={handleClick2} mt="4">Back</Button>
            </Box>

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

export default ProblemDescription;
