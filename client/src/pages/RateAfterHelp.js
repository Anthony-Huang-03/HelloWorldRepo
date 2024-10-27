import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    VStack,
    HStack,
    Flex,
    Link,
    Image,
} from "@chakra-ui/react";
import Background from "../assets/Background.jpeg"; // Import your background image
import Logo from "../assets/roadieRescueLogo.png";
import Footer from "../components/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import the logo

const RateAfterHelp = () => {
    const [rating, setRating] = useState(0); // State to hold the star rating
    const [confirmVisible, setConfirmVisible] = useState(false); // State to control confirm dialog visibility
    const [isConfirmed, setIsConfirmed] = useState(false); // State to track if rating is confirmed

    const location = useLocation();
    const { victim } = location.state || {};

    const handleStarClick = (index) => {
        if (!isConfirmed) {
            setRating(index + 1);
            setConfirmVisible(true); // Show confirm button when a star is clicked
        }
    };

    const handleConfirm = () => {
        setIsConfirmed(true); // Set rating as confirmed
        setConfirmVisible(false); // Hide confirm dialog
    };

    const handleClick1 = () => {
        try {
            axios.delete(`http://localhost:5010/api/victims/${victim.id}`)
                .then((res) => {
                    alert(res.data.message);
                    navigate("/");
                });
        } catch (error) {
            console.error("Error adding victim:", error);
            alert("There was an error adding the victim.");
        }
    };

    return (
        <Flex
            direction="column"
            minHeight="100vh"
            bgImage={`url(${Background})`}
            bgSize="cover"
            bgPosition="center"
        >
            {/* Logo positioned at the center above the rectangle */}
            <Center p={4}>
                <Image
                    src={Logo}
                    alt="Roadie Rescue Logo"
                    boxSize="200px" // Adjusted size to be smaller
                />
            </Center>

            <Center flex="1" p={4}>
                <Box
                    textAlign="center"
                    bg="white"
                    borderRadius="2xl"
                    p="6"
                    width="600px"
                    maxHeight="600px"
                    overflow="auto"
                >
                    <Heading size="lg" mb={4}>
                        Rate this guide/helper:
                    </Heading>

                    <HStack spacing={4} mb={4} justify="center">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleStarClick(index)}
                                style={{
                                    fontSize: "40px",
                                    cursor: isConfirmed ? "default" : "pointer",
                                    color: index < rating ? "#FFD700" : "#C1D8C3", // Gold for selected, light color for unselected
                                }}
                            >
                                ★
                            </span>
                        ))}
                    </HStack>

                    {confirmVisible && !isConfirmed && ( // Show confirm dialog only if not confirmed
                        <Box mb={4}>
                            <Text>Confirm rating?</Text>
                            <Button onClick={handleConfirm}>Yes</Button>
                        </Box>
                    )}

                    <Text fontSize="lg" mb={4}>
                        Please select one of the following actions:
                    </Text>

                    <VStack spacing={2}>
                        <Button onClick={handleClick1}>Helped by Helper</Button>
                        <Button onClick={handleClick1}>Helped by Others</Button>
                        <Button onClick={handleClick1}>Self-helped</Button>
                        <Button onClick={handleClick1}>Problem resolved itself</Button>
                    </VStack>
                </Box>
            </Center>

            {/* Contributors Box */}
            <Footer>

            </Footer>
        </Flex>
    );
};

export default RateAfterHelp;
