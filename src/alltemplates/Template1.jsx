import { Box, Heading, Text, List, ListItem, Divider, Stack, Grid, GridItem, Container } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Template1(){
  const {resumeData} = useContext(AuthContext)
    return <>
    <Box p={4} border="1px solid #ccc" borderRadius="8px" boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" h="60vh">
            <Heading as="h2" size="lg" mb={4}>{resumeData.name}</Heading>
            <Text mb={2}><strong>Email:</strong> {resumeData.email}</Text>
            <Text mb={2}><strong>Phone:</strong> {resumeData.phone}</Text>
            <Divider my={4} />
            <Box mb={4}>
              <Heading as="h3" size="md">Summary</Heading>
              <Text>{resumeData.summary}</Text>
            </Box>
            <Box mb={4}>
              <Heading as="h3" size="md">Experience</Heading>
              <Text>{resumeData.experience}</Text>
            </Box>
            <Box mb={4}>
              <Heading as="h3" size="md">Education</Heading>
              <Text>{resumeData.education}</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Skills</Heading>
              {/* <List>
                {resumeData.skills.split(',').map((skill, index) => (
                  <ListItem key={index}>{skill.trim()}</ListItem>
                ))}
              </List> */}
            </Box>
          </Box>
    </>
}

export default Template1