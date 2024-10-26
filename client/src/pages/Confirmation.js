import React, { useState, useEffect } from "react";
import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

const Confirmation = () => {
    // State to hold fetched data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [timeSpent, setTimeSpent] = useState("");

    // Simulate data fetching
    useEffect(() => {
        setName("John Doe");
        setEmail("john.doe@example.com");
        setTimeSpent("5 minutes");
    }, []);

    return (
        <Box p="5" textAlign="center">
            <Heading size="md" mb="5">
                Are you sure you want to confirm? (Help-seeker will be notified and given your contact info)
            </Heading>

            <VStack spacing="4">
                <Box p="3" borderRadius="md" boxShadow="md" bg="gray.100" w="100%">
                    <Text><strong>Name:</strong> {name}</Text>
                </Box>

                <Box p="3" borderRadius="md" boxShadow="md" bg="gray.100" w="100%">
                    <Text><strong>Email:</strong> {email}</Text>
                </Box>

                <Box p="3" borderRadius="md" boxShadow="md" bg="gray.100" w="100%">
                    <Text><strong>Time Spent Waiting:</strong> {timeSpent}</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default Confirmation;
