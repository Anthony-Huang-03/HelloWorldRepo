import React, { useState } from "react";
import { Box, Button, Heading, VStack, Text, Link, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundImage from '../assets/Background.jpeg'; // Adjust the path to your Background.jpeg
import Footer from '../components/Footer'; // Assuming Footer is a styled component

const Confirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State to hold fetched data
    const { latitude, longitude, victim } = location.state || {};
    const [hero, setHero] = useState({
        name: "",
        contact: "",
        latitude: latitude,
        longitude: longitude,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHero({
            ...hero,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            // Sending a POST request to add a new hero
            await axios.post("http://localhost:5010/api/heros", hero)
                .then((res) => {
                    victim.heroId = res.data.hero._id;
                    axios.put(`http://localhost:5010/api/victims/${victim._id}`, victim)
                        .then(res2 => {
                            console.log("Successfully set heroId to victim");
                            alert("Successfully confirm user action.");
                            navigate("/ConfirmInfo", {
                                state: { hero: res.data.hero, victim: victim },
                            });
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
        } catch (error) {
            console.error("Error adding hero:", error);
            alert("There was an error storing user information.");
        }
        console.log("pressing submit");
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            p="5"
            textAlign="center"
            bgImage={`url(${BackgroundImage})`}
            bgSize="cover"
            bgPosition="center"
        >
            <Box flex="1">
                {/* Confirmation Box */}
                <Box
                    p="4"
                    borderRadius="md"
                    boxShadow="lg"
                    bg="white"
                    mb="6"
                    width="600px"
                    mx="auto"
                >
                    <Heading size="lg" mb="4">
                        Are you sure you want to confirm? (Help-seeker will be notified and given your contact info)
                    </Heading>
                </Box>

                {/* Victim Information */}
                <Box
                    p="4"
                    borderRadius="md"
                    boxShadow="lg"
                    bg="white"
                    mb="6"
                    width="600px"
                    mx="auto"
                >
                    <Text fontSize="lg" mb="2">
                        <strong>Rescuee Name:</strong> {victim.name || "Loading..."}
                    </Text>
                    <Text fontSize="lg" mb="2">
                        <strong>Rescuee Email:</strong> {victim.contact || "Loading..."}
                    </Text>
                    <Text fontSize="lg" mb="2">
                        <strong>Problem Category:</strong> {victim.category || "Loading..."}
                    </Text>
                    <Text fontSize="lg">
                        <strong>Problem Description:</strong> {victim.description || "Loading..."}
                    </Text>
                </Box>

                {/* Hero Information Form */}
                <Box
                    p="4"
                    borderRadius="md"
                    boxShadow="lg"
                    bg="white"
                    mb="6"
                    width="600px"
                    mx="auto"
                >
                    <VStack spacing="4" as="form">
                        <FormControl>
                            <FormLabel htmlFor="name">User Name:</FormLabel>
                            <Input type="text" id="name" name="name" value={hero.name} onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="contact">User Email:</FormLabel>
                            <Input type="text" id="contact" name="contact" value={hero.contact} onChange={handleChange} />
                        </FormControl>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </VStack>
                </Box>
            </Box>

            {/* Contributor Section */}
            <Box
                p="4"
                borderRadius="md"
                boxShadow="lg"
                bg="white"
                width="600px"
                mx="auto"
                mb="4"
            >
                <Text fontSize="sm" color="gray.500" textAlign="center">
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

export default Confirmation;
