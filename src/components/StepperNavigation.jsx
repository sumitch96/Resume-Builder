import React from 'react';
import { Box, Text, Flex, VStack } from '@chakra-ui/react';
import {Link} from "react-router-dom"
const StepperNavigation = ({ steps, currentStep }) => {
  return (
    <VStack spacing={4} align="stretch">
    <Link to="/" style={{color:"blue"}}>&#60; Back</Link>
      {steps.map((step, index) => (
        <Box key={index} position="relative" textAlign="center">
          <Box
            width="50px"
            height="50px"
            borderRadius="50%"
            bg={index <= currentStep ? 'blue' : 'gray.300'}
            mx="auto"
            position="relative"
            zIndex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontFamily="sans-serif"
            fontWeight="700"
            color="white"
          >{index+1}</Box>
          <Text mt={2} fontFamily="sans-serif">{step}</Text>
          {index < steps.length - 1 && (
            <Box
              height="30px"
              width="2px"
              bg={index < currentStep ? 'tgreen' : 'red'}
              mx="auto"
              position="relative"
              mt={1}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '100%',
                bg: 'teal',
                transition: 'height 0.4s ease',
                height: index < currentStep ? '100%' : '0'
              }}
            />
          )}
        </Box>
      ))}
    </VStack>
  );
};

export default StepperNavigation;
