import React, { useContext, useState } from 'react';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import ResumeForm from '../components/ResumeForm';
import ResumeDocument from '../components/ResumeDocument';
import StepperNavigation from '../components/StepperNavigation';
import TemplateSelector from '../components/TemplateSelector';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
  const {resumeData, setResumeData} = useContext(AuthContext)
  const [step, setStep] = useState(0);
  const [currentTemplate, setCurrentTemplate] = useState('Template1');

  const steps = [
    'Personal Details',
    'Summary',
    'Experience',
    'Education',
    'Skills',
    'Preview'
  ];

  const templates = ['Template1', 'Template2', 'Template3'];

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  }
   
  return (
    <Box p={4} height="100vh" >
      <Heading mb={4} textAlign="center">Dashboard</Heading>
      <Flex>
        <Box width="25%">
          <StepperNavigation steps={steps} currentStep={step} />
          {/* {step === steps.length - 1 && (
            <TemplateSelector 
              templates={templates} 
              currentTemplate={currentTemplate} 
              setCurrentTemplate={setCurrentTemplate} 
            />
          )} */}
        </Box>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" width="100%">
      <Box width="75%" height="88vh" position="relative">
        <ResumeForm step={step} setStep={setStep} setResumeData={setResumeData} />
        {/* {step === steps.length - 1 && resumeData && (
          <ResumeDocument 
            resumeData={resumeData} 
            template={currentTemplate} 
          />
        )} */}
       
        <Flex
          position="absolute"
          bottom="8"
          left="0"
          width="100%"
          p={4}
          justifyContent="space-between"
           
        >
          <Button onClick={handlePrevStep} disabled={step === 0} variant="outline" colorScheme="blue">
            Previous
          </Button>
          <Button onClick={handleNextStep} disabled={step === steps.length - 1} variant="outline" colorScheme="blue">
            Next
          </Button>
        </Flex>
      </Box>
    </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
