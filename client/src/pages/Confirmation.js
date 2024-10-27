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
                        .then(res => {
                            console.log("Successfully set heroId to victim");
                            alert(res.data.message);
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
            alert("There was an error adding the hero.");
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
            bgImage={`url(${BackgroundImage})`} // Using the imported image as background
            bgSize="cover"
            bgPosition="center"
        >
            <Box flex="1"> {/* Ensures the box takes available space to push footer down */}
                {/* Confirmation Box */}
                <Box
                    p="3" // Consistent padding
                    borderRadius="md"
                    boxShadow="lg"
                    bg="white"
                    mb="4"
                    width="600px" // Set to match footer width
                    mx="auto" // Center the box horizontally
                >
                    <Heading size="lg" mb="1"> {/* Increased heading size */}
                        Are you sure you want to confirm? (Help-seeker will be notified and given your contact info)
                    </Heading>
                </Box>

                {/* Victim Info Box */}
                <Box
                    p="3" // Consistent padding
                    borderRadius="md"
                    boxShadow="lg"
                    bg="white"
                    mb="4"
                    width="600px" // Set to match footer width
                    mx="auto" // Center the box horizontally
                >
                    <Text fontSize="md">
                        <strong>Rescuee Name:</strong> {victim.name || "Loading..."}
                    </Text>
                    <Text fontSize="md">
                        <strong>Rescuee Email:</strong> {victim.contact || "Loading..."}
                    </Text>
                    <Text fontSize="md">
                        <strong>Problem Category:</strong> {victim.category || "Loading..."}
                    </Text>
                    <Text fontSize="md">
                        <strong>Problem Description:</strong> {victim.description || "Loading..."}
                    </Text>
                </Box>

                {/* User Input Box */}
                <Box
                    p="3" // Consistent padding
                    borderRadius="md"
                    boxShadow="lg"
                    bg="white"
                    mb="4"
                    width="600px" // Set to match footer width
                    mx="auto" // Center the box horizontally
                >
                    <VStack spacing="3" as="form">
                        <FormControl>
                            <FormLabel htmlFor="name">User Name:</FormLabel>
                            <Input type="text" id="name" name="name" value={hero.name} onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="contact">User Email:</FormLabel>
                            <Input type="text" id="contact" name="contact" value={hero.contact} onChange={handleChange} />
                        </FormControl>

                        <Button onClick={handleSubmit} bg="white" color="black" _hover={{ bg: "gray.200" }}>
                            Submit
                        </Button>
                    </VStack>
                </Box>
            </Box>

            {/* Contributors Box (Footer) */}
            <Footer />
        </Box>
    );
};

export default Confirmation;
