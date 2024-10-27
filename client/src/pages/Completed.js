import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button, Link as ChakraLink } from "@chakra-ui/react";

const Completed = ({ commission }) => { // Receive commission as a prop
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" textAlign="center" p="5">
            <Box flex="1">
                <Heading size="lg" mb="4">Thanks for helping!</Heading>

                <Text fontSize="lg" mb="6">
                    <strong>Commission:</strong> {commission || "Loading..."}
                </Text>

                <Button as={Link} to="/Home" colorScheme="teal" variant="solid">
                    Go to Home
                </Button>
            </Box>

            <Text fontSize="sm" color="gray.500" textAlign="center" mb="4">
                Contributors:{" "}
                <ChakraLink href="https://www.linkedin.com/in/jonnen-chong-22034620a/" isExternal color="blue.500" textDecoration="underline">
                    Jonnen Chong
                </ChakraLink>,{" "}
                <ChakraLink href="https://www.linkedin.com/in/anthony-huang-171910321/" isExternal color="blue.500" textDecoration="underline">
                    Anthony Huang
                </ChakraLink>,{" "}
                <ChakraLink href="https://www.linkedin.com/in/chan-nhu-pham-4876a127a/" isExternal color="blue.500" textDecoration="underline">
                    Soleil Pham
                </ChakraLink>, and{" "}
                <ChakraLink href="https://www.linkedin.com/in/jonathan-pratt-1a1196286/" isExternal color="blue.500" textDecoration="underline">
                    Jonathan Pratt
                </ChakraLink> - 2024
            </Text>
        </Box>
    );
};

export default Completed;
