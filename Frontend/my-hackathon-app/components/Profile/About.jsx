
import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
// import styles from "@emotion/styled";

// const AboutWrapper = styles.div`
//   padding: 5px 20px;
// `;

// const ProfileName = styles.h2`
//   margin: 0;
//   font-weight: 500;
//   font-size: 18px;
// `;

// const ProfileCategory = styles.span`
//   color: #919191;
//   font-size: 15px;
// `;

// const BioText = styles.span`
//   display: block;
//   margin-top: 3px;
// `;

// const BioLink = styles.a`
//   text-decoration: none;
//   display: inline-block;
//   font-size: 15px;
//   color: #3d83b6;
//   margin-top: 3px;
// `;

const UserName = "VivEk GupTa" || [];

const UserAbout = "Education" || [];

function About() {
  return (
    <Box padding="5px 20px">
      <Text fontWeight="500" fontSize="18px">{UserName}</Text>
      <Text color="#919191" fontSize="15px">{UserAbout}</Text>
      <Text display="block" marginTop="3px" fontSize={{ base: '12px', md: '14px', lg: '16px' }} >🌐All About FrontEnd Web-Development</Text>
      <Text display="block" marginTop="3px" fontSize={{ base: '12px', md: '14px', lg: '16px' }} >📒Resources/tips/tricks/tutorials</Text>
      <Text display="block" marginTop="3px" fontSize={{ base: '12px', md: '14px', lg: '16px' }} >👨‍💻Bug Free code</Text>
      <Text display="block" marginTop="3px" fontSize={{ base: '12px', md: '14px', lg: '16px' }} >🌱 Let's Grow Together</Text>
      {/* <Text display="block" marginTop="3px">⬇️Join Our Telegram Channel</Text> */}
      {/* <Link href="https://t.me/sparshcodes">t.me/sparshcodes</Link> */}
    </Box>
    // <AboutWrapper>
    //   <ProfileName>{UserName}</ProfileName>
    //   <ProfileCategory>Education</ProfileCategory>
    //   <BioText>🌐All About FrontEnd Web-Development</BioText>
    //   <BioText>📒Resources/tips/tricks/tutorials</BioText>
    //   <BioText>👨‍💻Bug Free code</BioText>
    //   <BioText>🌱 Let's Grow Together</BioText>
    // </AboutWrapper>
  );
}

export default About;