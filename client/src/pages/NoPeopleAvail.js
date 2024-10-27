import React from "react";
import { Box, Heading, Center, Image, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Background from "../assets/Background.jpeg"; // Import your background image
import Logo from "../assets/roadieRescueLogo.png";
import Footer from "../components/Footer"; // Import the logo

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
            <Footer>

            </Footer>
        </Flex>
    );
};

export default NoPeopleAvail;
