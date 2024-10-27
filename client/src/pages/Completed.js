import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button, Link as ChakraLink, Center, Image, Flex } from "@chakra-ui/react";
import Background from "../assets/Background.jpeg"; // Import your background image
import Logo from "../assets/roadieRescueLogo.png";
import Footer from "../components/Footer"; // Import the logo
import image from "../markerIcon/thankyouGIF.webp";


const Completed = () => { // Receive commission as a prop
    return (
        <Flex
            direction="column"
            minHeight="100vh"
            bgImage={`url(${Background})`}
            bgSize="cover"
            bgPosition="center"
            p="5"
        >
            {/* Logo positioned at the center above the rectangle */}
            <Center p={4}>
                <Image
                    src={Logo}
                    alt="Roadie Rescue Logo"
                    boxSize="250px" // Adjusted size for the logo
                />
            </Center>

            <Box flex="1">
                <Box
                    textAlign="center"
                    bg="white"
                    borderRadius="2xl"
                    p="6"
                    width="600px"
                    maxHeight="600px"
                    mx="auto" // Center horizontally
                    overflow="auto"
                >
                    <Heading size="lg" mb="4">Thanks for helping!</Heading>
                    <Image src={image} padding="30px"></Image> 
                    {/* align the photo pls */}
                    <Button as={Link} to="/Home" variant="outline" color="black">
                        Go to Home
                    </Button>
                </Box>
            </Box>

            {/* Contributors Box */}
            <Footer>

            </Footer>
        </Flex>
    );
};

export default Completed;
