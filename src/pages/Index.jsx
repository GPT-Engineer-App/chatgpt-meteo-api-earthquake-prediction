import { Box, Container, Heading, Text, VStack, Button, Input, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  // This toast is for showing feedback, in a real app you'd use it to show actual responses from the API
  const toast = useToast();

  const handlePredictClick = () => {
    // In a real application, you would make an API request here.
    // For simulation, we're just showing a toast message.
    toast({
      title: "Prediction Request Sent",
      description: "Your earthquake prediction request has been sent. Please wait for the results.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading>Earthquake Prediction</Heading>
        <Text>Enter a location to predict potential seismic activity.</Text>
        <Input placeholder="Enter location" size="md" />
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handlePredictClick}>
          Predict Earthquake
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
