import { Box, Heading, Text, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";

const ProblemDescription = () => {

    const { category } = useParams();
    console.log(category)

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/VictimMap');

    };

    const handleClick2 = () => {
        navigate('/');
    };

    const [victim, setVictim] = useState({
        category: category,
        description: "",
        name: "",
        contact: "",
        latitude: "",
        longitude: ""
    });

    console.log(victim)

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
            // Optionally, update local state or fetch updated data if necessary
        } catch (error) {
            console.error("Error adding victim:", error);
            alert("There was an error adding the victim.");
        }
    };

    return (
        <Box textAlign="center" p="6">
            <Heading size="lg" mb="4">What is your problem?</Heading>

            {/* 911 Warning Alert */}
            <Alert status="warning" mb="4" justifyContent="center">
                <AlertIcon />
                If you are in immediate danger, please call 911!
            </Alert>

            <VStack spacing="4" as="form" action="/action_page.php">
                <FormControl>
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <Input type={victim.name} id="name" name="name" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <Input type={victim.contact} id="email" name="email" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="description">Description:</FormLabel>
                    <Input type={victim.description} id="description" name="description" />
                </FormControl>

                <Button onClick={handleClick1} type="submit">Submit</Button>
            </VStack>
            <Button onClick={handleClick2} mt="4">Back</Button>
        </Box>
    );
};

export default ProblemDescription;
