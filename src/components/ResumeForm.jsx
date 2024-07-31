import React, { useContext, useState } from 'react';
import { Box, Input, Textarea, Button, FormControl, FormLabel, Container, Heading} from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import {Link as RLink} from "react-router-dom"
import { AuthContext } from '../context/AuthContext';
import SkillsForm from './SkillForm';

const ResumeForm = ({ step, setStep}) => {
  const {setResumeData}=useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: [],
  });
  const handleSkillsChange = (newSkills) => {
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditorChange = (content) => {
    setFormData({
      ...formData,
      summary: content,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData(formData);
  };

  const renderFormStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <FormControl mb={4}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="enter full name here"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="enter your email here"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="enter phone number here"
              />
            </FormControl>
          </>
        );
      case 1:
        return (
          <FormControl mb={4}>
            <FormLabel htmlFor="summary">Summary</FormLabel>
            <Editor
              apiKey="es1eysqwrxbp3eh4ez1imytlhw0g4yxl3ndqey39g1jgr2le"
              value={formData.summary}
              onEditorChange={handleEditorChange}
              init={{
                height: 200,
                menubar: false,
                placeholder:"enter professional summary here",
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help'
              }}
            />
          </FormControl>
        );
      case 2:
        return (
          <FormControl mb={4}>
            <FormLabel htmlFor="experience">Experience</FormLabel>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="enter your experience"
            />
          </FormControl>
        );
      case 3:
        return (
          <FormControl mb={4}>
            <FormLabel htmlFor="education">Education</FormLabel>
            <Textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="enter education details"
            />
          </FormControl>
        );
      case 4:
        return (
          // <FormControl mb={4}>
          //   <FormLabel htmlFor="skills">Skills</FormLabel>
          //   <Textarea
          //     id="skills"
          //     name="skills"
          //     value={formData.skills}
          //     onChange={handleChange}
          //     placeholder="enter your skills"
          //   />
          // </FormControl>
          <SkillsForm skills={formData.skills} onSkillsChange={handleSkillsChange}/>
        );
      default:
        return null;
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      {renderFormStep()}
      <Container>
      {step === 5 && (
        <>
        <Button type="submit" colorScheme="blue" width="full">
          <RLink to="/templates">
          Generate Resume 💥
          </RLink>
        </Button>
       </>
      )}
      </Container>
    </Box>
  );
};

export default ResumeForm;
