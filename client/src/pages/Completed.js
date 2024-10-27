import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button, Link as ChakraLink, Center, Image, Flex } from "@chakra-ui/react";
import Background from "../assets/Background.jpeg"; // Import your background image
import Logo from "../assets/roadieRescueLogo.png"; // Import the logo

const Completed = ({ commission }) => { // Receive commission as a prop
    return (
        <Flex
            direction="column"
            minHeight="100vh"
            bgImage={`url(${Background})`}
            bgSize="cover"
            bgPosition="center"
            p="5"
        >
            {/* Logo positioned at the center above the rectangle */}
            <Center p={4}>
                <Image
                    src={Logo}
                    alt="Roadie Rescue Logo"
                    boxSize="250px" // Adjusted size for the logo
                />
            </Center>

            <Box flex="1">
                <Box
                    textAlign="center"
                    bg="white"
                    borderRadius="2xl"
                    p="6"
                    width="600px"
                    maxHeight="600px"
                    mx="auto" // Center horizontally
                    overflow="auto"
                >
                    <Heading size="lg" mb="4">Thanks for helping!</Heading>

                    <Text fontSize="lg" mb="6">
                        <strong>Commission:</strong> {commission || "Loading..."}
                    </Text>

                    <Button as={Link} to="/Home" variant="outline" color="black">
                        Go to Home
                    </Button>
                </Box>
            </Box>

            {/* Contributors Box */}
            <Box
                border="1px"
                borderColor="gray.200"
                borderRadius="2xl"
                p="4"
                mt="6"
                textAlign="center"
                bg="white" // Fully opaque white background
                mx="auto" // Center horizontally
                width="600px" // Match the width of the main content box
            >
                <Text fontSize="sm" color="gray.500">
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
        </Flex>
    );
};

export default Completed;
