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
                            alert(res.data.message);
                            navigate("/ConfirmInfo", {
                                state: { hero: res.data.hero, victim: victim },
                            });
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
            // Optionally, update local state or fetch updated data if necessary
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

                <Text fontSize="lg">
                    <strong>Rescuee Name:</strong> {victim.name || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>Rescuee Email:</strong> {victim.contact || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>Problem Category:</strong> {victim.category || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>Problem Description:</strong> {victim.description || "Loading..."}
                </Text>

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
                
{/* 
                <VStack spacing="4">
                    <Box p="3" borderRadius="md" boxShadow="md" bg="gray.100" w="100%">
                        <Text><strong>Name:</strong> {name}</Text>
                    </Box>

                    <Box p="3" borderRadius="md" boxShadow="md" bg="gray.100" w="100%">
                        <Text><strong>Email:</strong> {email}</Text>
                    </Box>

                    <Box p="3" borderRadius="md" boxShadow="md" bg="gray.100" w="100%">
                        <Text><strong>Time Spent Waiting:</strong> {timeSpent}</Text>
                    </Box>

                </VStack> */}
            </Box>

            <Text fontSize="sm" color="gray.500" textAlign="center" mb="4">
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

export default Confirmation;
