// SkillsForm.js
import React, { useState } from 'react';
import { Box, Input, Button, Stack, HStack, Heading ,Text, Container, VStack} from '@chakra-ui/react';

const SkillsForm = ({ skills, onSkillsChange }) => {
  const [newSkill, setNewSkill] = useState('');
  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      onSkillsChange([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    onSkillsChange(updatedSkills);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = skills.map((skill, i) => (i === index ? value : skill));
    onSkillsChange(updatedSkills);
  };

  return (
    <Box>
      <Heading as="h3" size="lg" mb="10px">Skills</Heading>
      <Container maxW="100%" p="10px">
          <HStack>
       {skills.map((ele,index)=>
            <Heading size="sm" key={index} textDecoration="underline">{ele}</Heading>
        )}
        </HStack>
        </Container>
        <Stack spacing="10px">
        {skills.map((skill, index) => (
          <HStack key={index} spacing="10px">
            <Input
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
            <Button colorScheme="red" onClick={() => handleDeleteSkill(index)}>Delete</Button>
          </HStack>
        ))}
        <HStack spacing="10px">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill"
          />
          <Button colorScheme="blue" onClick={handleAddSkill}>Add Skill</Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default SkillsForm;
