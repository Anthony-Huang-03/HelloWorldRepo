import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack, Center, Alert, AlertIcon, Link, Flex, HStack, Image,Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from "@chakra-ui/react";
import Map from "../components/Map"; // Ensure this is the correct path for your Map component
import Background from "../assets/Background.jpeg";
import Footer from "../components/Footer"; // Import your background image
import Drop from "../assets/dropdown.jpg";


const ProblemIdentification = () => {
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
    const { isOpen: isDropdownOpen, onOpen: onDropdownOpen, onClose: onDropdownClose } = useDisclosure();
    const navigate = useNavigate();
    const [location, setLocation] = useState({ latitude: null, longitude: null });

      useEffect(() => {
        onModalOpen(); // Open the modal automatically
      }, [onModalOpen]);

    // Geolocation logic to get user's current position
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleClick1 = (val) => {
        navigate("/ProblemDescription", {
            state: { category: val, latitude: location.latitude, longitude: location.longitude }
        });
    };
    const handleClick2 = () => {
        navigate("/");
    };

    return (
        <Flex direction="column" minHeight="100vh" bgImage={`url(${Background})`} bgSize="cover" bgPosition="center">
                    {/* Main Content Box */}
                  <>
                    <Modal isOpen={isModalOpen} onClose={onModalClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>Please Read!</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                Please check out the guide by hovering over the menu button before sending a help request!
                                <br /> Thank You!
                                </ModalBody>
                                <ModalFooter>
                                <Button colorScheme="blue" onClick={onModalClose}>
                                  Close
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>

                        <Box
                        bg="white" // Fully opaque white background
                        borderRadius="2xl" // More rounded edges
                        p="4"
                        width="600px" // Adjusted width to match previous example
                        mx="auto" // Center the box horizontally
                        mt="4" // Margin on top
                        flex="1"
                            >
                        <Box textAlign="center">
                            <Heading size="xl" mb="4">What is your problem?</Heading>

                            {/* Centered Alert */}
                            <Center mb="4">
                                <Alert status="warning" width="100%" maxWidth="600px" mx="auto">
                                    <AlertIcon />
                                    If you are in immediate danger, please call 911!
                                </Alert>
                            </Center>

                            <Center mb="4">
                                {location.latitude && location.longitude ? (
                                    <Map position={location} icon={7}/>
                                ) : (
                                    <Text>Loading map...</Text>
                                )}
                            </Center>
                             <Flex
                                  direction="row" // Horizontal alignment
                                  justify="center" // Center horizontally
                                  align="center" // Center vertically
                                  height="10vh" // Full viewport height
                                >
                                  <Text fontSize="lg" marginRight={3}>Please select a category or look for tips here:</Text>
                                  <Box
                                        position="relative"
                                        onMouseEnter={onDropdownOpen}
                                        onMouseLeave={onDropdownClose}
                                      >
                                 <Menu isOpen={isDropdownOpen}>
                                       <MenuButton as={Button} padding="0" borderRadius="md">
                                         <Image
                                           src={Drop} // Use the imported image here
                                           alt="Dropdown Menu Button"
                                           boxSize="40px" // Set the size of the image
                                           objectFit="cover" // Ensures the image covers the area without distortion
                                           borderRadius="full" // Makes the corners round (full for circle)
                                         />
                                       </MenuButton>
                                       <MenuList display="flex" flexDirection="column" alignItems="center" position="absolute" zIndex={1} minWidth="200px" onMouseEnter={onDropdownOpen} onMouseLeave={onDropdownClose} display={isModalOpen ? 'none' : 'block'}
                                       >
                                       <Box display="flex" flexDirection="column" alignItems="center" padding="10px">
                                         <MenuItem as="a" href="https://www.amfam.com/resources/articles/on-the-road/11-steps-to-fix-a-flat-tire" target="_blank" rel="noopener noreferrer" w="100%">
                                           Breakdown
                                         </MenuItem>
                                         <MenuItem as="a" href="https://www.arkansasonline.com/news/2018/jan/21/how-get-food-when-youre-stranded-and-hungry/" target="_blank" rel="noopener noreferrer" w="100%">
                                           Limited Food
                                         </MenuItem>
                                         <MenuItem as="a" href="https://www.statefarm.com/simple-insights/auto-and-vehicles/can-you-drive-safely-in-every-type-of-severe-weather" target="_blank" rel="noopener noreferrer" w="100%">
                                           Bad Weather
                                         </MenuItem>
                                         <MenuItem as="a" href="https://safetycenter.njm.com/what-to-do-when-you-run-out-of-gas" target="_blank" rel="noopener noreferrer" w="100%">
                                           Out of Fuel
                                         </MenuItem>
                                         <MenuItem as="a" href="https://blog.cargobot.io/how-to-beat-boredom-while-driving#:~:text=Play%20Silly%20Games,become%20distracted%20from%20the%20road." target="_blank" rel="noopener noreferrer" w="100%">
                                           Boredom
                                         </MenuItem>
                                         <MenuItem as="a" href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=1&contentid=2746" target="_blank" rel="noopener noreferrer" w="100%">
                                            Fatigue and Exhaustion
                                         </MenuItem>
                                         </Box>
                                       </MenuList>
                                     </Menu>
                               </Box>
                                </Flex>

                            <VStack spacing="4">
                            <Button onClick={() => handleClick1("Vehicle Breakdowns")}>Vehicle Breakdowns</Button>
                            <Button onClick={() => handleClick1("Limited Food Options")}>Limited Food Options</Button>
                            <Button onClick={() => handleClick1("Bad Weather Conditions")}>Bad Weather Conditions</Button>
                            <Button onClick={() => handleClick1("Running Out of Fuel")}>Running Out of Fuel</Button>
                            <Button onClick={() => handleClick1("Boredom")}>Boredom</Button>
                            <Button onClick={() => handleClick1("Fatigue and Driver Exhaustion")}>Fatigue and Driver Exhaustion</Button>
                            <Button colorScheme="red" onClick={handleClick2}>Back</Button>
                            </VStack>
                        </Box>
                    </Box>

                    {/* Contributors Box */}
                    <Footer>

                    </Footer>
                  </>
                </Flex>
    );
};

export default ProblemIdentification;
