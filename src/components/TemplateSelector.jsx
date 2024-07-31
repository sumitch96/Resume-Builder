import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

const TemplateSelector = ({ templates, currentTemplate, setCurrentTemplate }) => {
  return (
    <VStack spacing={4} align="stretch">
      {templates.map((template, index) => (
        <Button
          key={index}
          variant={currentTemplate === template ? 'solid' : 'outline'}
          colorScheme="teal"
          onClick={() => setCurrentTemplate(template)}
        >
          {template}
        </Button>
      ))}
    </VStack>
  );
};

export default TemplateSelector;
