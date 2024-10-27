import React from "react";
import { Box, Heading, Center, Image, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Background from "../assets/Background.jpeg"; // Import your background image
import Logo from "../assets/roadieRescueLogo.png"; // Import the logo

const NoPeopleAvail = ({ message = "There are no people who need help right now. Thanks though!" }) => {
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
            <Center mb={-12}> {/* Increased negative margin for the logo */}
                <Image
                    src={Logo}
                    alt="Roadie Rescue Logo"
                    boxSize="250px" // Adjusted size for the logo
                />
            </Center>

            <Box flex="1" p="4" mt={8}> {/* Added margin-top to lower the text box */}
                <Box
                    textAlign="center"
                    bg="white"
                    borderRadius="2xl"
                    p="8" // Increased padding for the white box
                    width="600px"
                    mx="auto" // Center horizontally
                >
                    <Heading size="md">{message}</Heading>
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

export default NoPeopleAvail;
