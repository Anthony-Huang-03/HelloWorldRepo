import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    Link,
    Center,
    Image,
    Flex
} from "@chakra-ui/react";
import Background from "../assets/Background.jpeg"; // Import your background image
import Logo from "../assets/roadieRescueLogo.png"; // Import the logo
import Footer from "../components/Footer"
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
            bgImage={`url(${Background})`} // Background image
            bgSize="cover"
            bgPosition="center"
            p="6"
            textAlign="center"
        >
            {/* Logo positioned closer to the top */}
            <Center mb={-12}> {/* Negative margin to raise the logo */}
                <Image
                    src={Logo}
                    alt="Roadie Rescue Logo"
                    boxSize="250px" // Size for the logo
                />
            </Center>

            <Box flex="1" p="4" mt={8}> {/* Margin to lower the text box */}
                <Box
                    textAlign="center"
                    bg="white" // White background for the main content box
                    borderRadius="2xl"
                    p="8" // Padding for the white box
                    width="600px" // Width of the content box
                    mx="auto" // Center horizontally
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
                        <Button onClick={handleButtonClick} w="full">
                            User successfully helped
                        </Button>
                        <Button onClick={handleButtonClick} w="full">
                            Unable to help user
                        </Button>
                        <Button onClick={handleButtonClick} w="full">
                            User not found at location
                        </Button>
                    </VStack>
                </Box>
            </Box>

            {/* Contributors Box */}
            <Footer>

            </Footer>
        </Flex>
    );
};

export default ConfirmInfo;
