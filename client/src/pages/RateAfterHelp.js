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
import Logo from "../assets/roadieRescueLogo.png"; // Import the logo

const RateAfterHelp = () => {
    const [rating, setRating] = useState(0); // State to hold the star rating
    const [confirmVisible, setConfirmVisible] = useState(false); // State to control confirm dialog visibility
    const [isConfirmed, setIsConfirmed] = useState(false); // State to track if rating is confirmed

    const [victim, setVictim] = useState(null);

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
        victim.deleteVictim();
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
                        <Button onClick={handleClick1()}>Helped by Helper</Button>
                        <Button onClick={handleClick1()}>Helped by Others</Button>
                        <Button onClick={handleClick1()}>Self-helped</Button>
                        <Button onClick={handleClick1()}>Problem resolved itself</Button>
                    </VStack>
                </Box>
            </Center>

            {/* Footer Box */}
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
        </Flex>
    );
};

export default RateAfterHelp;
