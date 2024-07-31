import React from 'react';
import { Box, Heading, Text, List, ListItem, Divider, Stack, Grid, GridItem, Container } from '@chakra-ui/react';
import Template1 from '../alltemplates/Template1';
import Template2 from '../alltemplates/Template2';
import Template3 from '../alltemplates/Template3';

const ResumeDocument = () => {
 
   return <>
      <Heading textAlign="center" mt="5px" color="blue">!! ``Select best template`` !!</Heading>
     <Container maxW="80%" mt={10} p={10} height="90vh" borderRadius="20px">
     <Grid templateColumns='repeat(3, 1fr)' gap={6} maxW="100%" >
    <GridItem w='100%' >
          <Template1/>
          </GridItem>
          <GridItem w='100%'>
           <Template2/>
          </GridItem>

          <GridItem w='100%'>
           <Template3/>
          </GridItem>
       </Grid>
     </Container>
    </>
};

export default ResumeDocument;
