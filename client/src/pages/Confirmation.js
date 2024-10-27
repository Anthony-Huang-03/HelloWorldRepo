import React, { useState, useEffect } from "react";
import { Box, Button, Heading, VStack, Text, Link } from "@chakra-ui/react";

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
        <Box display="flex" flexDirection="column" minHeight="100vh" p="5" textAlign="center">
            <Box flex="1">
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
        </Box>
    );
};

export default Confirmation;