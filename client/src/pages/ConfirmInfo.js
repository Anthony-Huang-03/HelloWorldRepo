import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    Link as ChakraLink,
    Center,
    Image,
    Flex
} from "@chakra-ui/react";
import Background from "../assets/Background.jpeg"; // Import your background image
import Logo from "../assets/roadieRescueLogo.png"; // Import the logo

const ConfirmInfo = ({ userName, userEmail, problemDescription }) => {
    const navigate = useNavigate();

    // Function to handle button clicks
    const handleButtonClick = () => {
        navigate("/Completed");
    };

    return (
        <Flex
            direction="column"
            minHeight="100vh"
            bgImage={`url(${Background})`}
            bgSize="cover"
            bgPosition="center"
            p="6"
            textAlign="center"
        >
            {/* Logo positioned closer to the top */}
            <Center mb={50}> {/* Increased negative margin for the logo */}
                <Image
                    src={Logo}
                    alt="Roadie Rescue Logo"
                    boxSize="250px" // Adjusted size for the logo
                />
            </Center>

            <Box flex="1" mt={-10}> {/* Negative margin-top to shift the box up */}
                <Box
                    textAlign="center"
                    bg="white"
                    borderRadius="2xl"
                    p="8" // Increased padding for the big white box
                    width="600px"
                    maxHeight="800px" // Increased height for the box
                    mx="auto" // Center horizontally
                    overflow="auto"
                >
                    <Heading size="lg" mb="4">Selection Confirmed!</Heading>
                    <Text fontSize="lg" mb="8">
                        Email notification has been sent to the selected user.
                    </Text>

                    <VStack align="stretch" spacing="4" maxW="600px" mx="auto">
                        <Text fontSize="lg">
                            <strong>User Name:</strong> {userName || "Loading..."}
                        </Text>
                        <Text fontSize="lg">
                            <strong>User Email:</strong> {userEmail || "Loading..."}
                        </Text>

                        <Text fontSize="lg"><strong>Problem Description:</strong></Text>
                        <Box
                            p="4"
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="md"
                            minH="100px"
                            overflowY="auto"
                            fontSize="md"
                        >
                            {problemDescription || "Loading..."}
                        </Box>
                    </VStack>

                    <Heading size="md" mt="12" mb="4">
                        Please select one of the following actions upon arrival:
                    </Heading>

                    <VStack spacing="4" maxW="600px" mx="auto" w="full">
                        <Button onClick={handleButtonClick} w="full" variant="outline" color="black">
                            User successfully helped
                        </Button>
                        <Button onClick={handleButtonClick} w="full" variant="outline" color="black">
                            Unable to help user
                        </Button>
                        <Button onClick={handleButtonClick} w="full" variant="outline" color="black">
                            User not found at location
                        </Button>
                    </VStack>
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

export default ConfirmInfo;
