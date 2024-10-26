import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Text, Link, VStack } from "@chakra-ui/react";

const Guide = () => {
    return (
        <Box p="4">
            <VStack align="center" spacing="4" mt="10">
                <Text>Here is a guide on how to attempt to fix a flat tire yourself:</Text>
                <Link
                    href="https://www.amfam.com/resources/articles/on-the-road/11-steps-to-fix-a-flat-tire"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fix a Flat Tire Guide
                </Link>

                {/* Bottom Link for more help */}
                <Link as={RouterLink} to="/VictimMap">
                    Still need help?
                </Link>
            </VStack>
        </Box>
    );
};

export default Guide;
