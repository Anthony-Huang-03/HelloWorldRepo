import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    VStack,
    HStack,
    Link,
} from "@chakra-ui/react";

const RateAfterHelp = () => {
    const [rating, setRating] = useState(0); // State to hold the star rating
    const [confirmVisible, setConfirmVisible] = useState(false); // State to control confirm dialog visibility
    const [isConfirmed, setIsConfirmed] = useState(false); // State to track if rating is confirmed

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

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh" p={4}>
            <Center>
                <Box textAlign="center">
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
                        <Button>Helped by Helper</Button>
                        <Button>Helped by Others</Button>
                        <Button>Self-helped</Button>
                        <Button>Problem resolved itself</Button>
                    </VStack>
                </Box>
            </Center>

            {/* Footer */}
            <Box textAlign="center" mb={4}>
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
        </Box>
    );
};

export default RateAfterHelp;
