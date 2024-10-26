import React from "react";
import { Box, Heading, Text, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const ProblemDescription = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/VictimMap');
    };

    const handleClick2 = () => {
        navigate('/');
    };

    return (
        <Box textAlign="center" p="6">
            <Heading size="lg" mb="4">What is your problem?</Heading>

            {/* 911 Warning Alert */}
            <Alert status="warning" mb="4" justifyContent="center">
                <AlertIcon />
                If you are in immediate danger, please call 911!
            </Alert>

            <Box mb="6">--- MAP ---</Box>
            <VStack spacing="4" as="form" action="/action_page.php">
                <FormControl>
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <Input type="text" id="name" name="name" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <Input type="text" id="email" name="email" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="description">Description:</FormLabel>
                    <Input type="text" id="description" name="description" />
                </FormControl>

                <Button onClick={handleClick1} type="submit">Submit</Button>
            </VStack>
            <Button onClick={handleClick2} mt="4">Back</Button>
        </Box>
    );
};

export default ProblemDescription;
