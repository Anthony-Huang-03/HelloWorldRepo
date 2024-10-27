import {Box, Link, Text} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
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
    );
};

export default Footer;