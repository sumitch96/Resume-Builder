import { Box, Heading, Text, List, ListItem, Divider, Stack, Grid, GridItem, Container } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Template3(){
   const {resumeData} =useContext(AuthContext)
    return <>
    <Box p={4} border="1px dashed #00C851" borderRadius="8px" bg="gray.50" boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" h="60vh">
            <Heading as="h2" size="lg" mb={4} color="#00C851">{resumeData.name}</Heading>
            <Text mb={2}><strong>Email:</strong> {resumeData.email}</Text>
            <Text mb={2}><strong>Phone:</strong> {resumeData.phone}</Text>
            <Divider my={4} />
            <Stack direction="row" mb={4}>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Summary</Heading>
                <Text>{resumeData.summary}</Text>
              </Box>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Experience</Heading>
                <Text>{resumeData.experience}</Text>
              </Box>
            </Stack>
            <Stack direction="row" mb={4}>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Education</Heading>
                <Text>{resumeData.education}</Text>
              </Box>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Skills</Heading>
                {/* <List>
                  {resumeData.skills.split(',').map((skill, index) => (
                    <ListItem key={index}>{skill.trim()}</ListItem>
                  ))}
                </List> */}
              </Box>
            </Stack>
          </Box>
    </>
}
export default Template3