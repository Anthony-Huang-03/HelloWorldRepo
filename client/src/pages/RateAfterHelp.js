import React, { useState } from "react";

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
        <Center height="100vh" p={4}>
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
    );
};

// Button style shared across buttons
const buttonStyle = {
    backgroundColor: "#C1D8C3",
    color: "#000000",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    margin: "5px 0",
    cursor: "pointer",
    fontSize: "18px",
    width: "100%"
};

export default RateAfterHelp;
