import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bg="gray.100"
      p={4}
    >
      <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-github-a-web-based-hosting-service-for-version-control-logo-bold-tal-revivo.png" alt="external-github-a-web-based-hosting-service-for-version-control-logo-bold-tal-revivo"/>
      <Heading mb={4}>Welcome to Resume Builder Application</Heading>
      <Text mb={8}>Create your professional resume within few minutes</Text>
      <Button as={Link} to="/dashboard" colorScheme="teal" size="lg">
        Start Building
      </Button>
    </Box>
  );
};

export default Home;
