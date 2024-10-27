import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import Footer from "../components/Footer";
import RoutingMap from "../components/RoutingMap";

const ConfirmInfo = ({ userName, userEmail, problemDescription }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { hero, victim } = location.state || {};

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
            <Center mb={-12}>
                <Image
                    src={Logo}
                    alt="Roadie Rescue Logo"
                    boxSize="250px"
                />
            </Center>

            <Box flex="1" p="4" mt={8}>
                <Box
                    textAlign="center"
                    bg="white"
                    borderRadius="2xl"
                    p="8"
                    width="800px" // Increased width
                    mx="auto"
                    boxShadow="lg" // Adds a shadow for better visibility
                >
                    <Heading size="lg" mb="4">Selection Confirmed!</Heading>
                    <Text fontSize="lg" mb="8">
                        Email notification has been sent to the selected user.
                    </Text>

                    <VStack align="stretch" spacing="4" maxW="800px" mx="auto">
                        <Text fontSize="lg">
                            <strong>User Name:</strong> {victim.name || "Loading..."}
                        </Text>
                        <Text fontSize="lg">
                            <strong>User Email:</strong> {victim.contact || "Loading..."}
                        </Text>
                        <Text fontSize="lg">
                            <strong>Problem Category:</strong> {victim.category || "Loading..."}
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
                            width="100%" // Ensures it spans the full width
                        >
                            {victim.description || "Loading..."}
                        </Box>
                    </VStack>

                    <Box
                        mt="8"
                        p="4"
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="md"
                        width="100%"
                        height="400px" // Increased height
                        mx="auto"
                        mb="8"
                        overflow="hidden"
                    >
                        <RoutingMap hero={hero} victim={victim} />
                    </Box>

                    <Heading size="md" mt="12" mb="4">
                        Please select one of the following actions upon arrival:
                    </Heading>

                    <VStack spacing="4" maxW="800px" mx="auto" w="full">
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

            {/* Contributors Footer */}
            <Footer />
        </Flex>
    );
};

export default ConfirmInfo;
