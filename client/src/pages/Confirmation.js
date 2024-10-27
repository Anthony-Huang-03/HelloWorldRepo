import React, { useState, useEffect, useLocation } from "react";
import { Box, Button, Heading, VStack, Text, Link,
    FormControl, FormLabel, Input
    
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Confirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State to hold fetched data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [timeSpent, setTimeSpent] = useState("");

    const { latitude, longitude } = location.state || {};

    // Simulate data fetching
    useEffect(() => {
        setName("John Doe");
        setEmail("john.doe@example.com");
        setTimeSpent("5 minutes");
    }, []);

    const [hero, setHero] = useState({
        name: "",
        contact: "",
        latitude: latitude,
        longitude: longitude
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
            // Sending a POST request to add a new victim
            const response = await axios.post("/api/heros", hero);
            alert(response.data.message);
        } catch (error) {
            console.error("Error adding hero:", error);
            alert("There was an error adding the hero.");
            navigate('/ConfirmInfo');
        }
        navigate('/ConfirmInfo');
    };



    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" p="5" textAlign="center">
            <Box flex="1">
                <Heading size="md" mb="5">
                    Are you sure you want to confirm? (Help-seeker will be notified and given your contact info)
                </Heading>

                {/* <Text fontSize="lg">
                    <strong>Rescuee Name:</strong> {userName || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>Rescuee Email:</strong> {userEmail || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>Problem Category:</strong> {userName || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>Problem Description:</strong> {userEmail || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>User Name:</strong> {userName || "Loading..."}
                </Text>
                <Text fontSize="lg">
                    <strong>User Email:</strong> {userEmail || "Loading..."}
                </Text> */}

                <VStack spacing="4" as="form">
                    <FormControl>
                        <FormLabel htmlFor="name">User Name:</FormLabel>
                        <Input type="text" id="name" name="name" value={hero.name} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="contact">User Email:</FormLabel>
                        <Input type="text" id="contact" name="contact" value={hero.contact} onChange={handleChange} />
                    </FormControl>
                    <Button onClick={handleSubmit} type="submit">Submit</Button>
                </VStack>
                

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

                </VStack>
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
