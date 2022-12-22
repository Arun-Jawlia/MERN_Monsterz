
import React from "react";
import { Box, Button } from "@chakra-ui/react";



function ProfileButtons() {
  return (
    <Box padding="25px 20px">
      <Box display="flex" justifyContent="space-around" gap="4%" > 
        <Button w="100%" fontSize={{ base: '14px', md: '16px', lg: '17px' }} >Edit Profile</Button>
        <Button w="100%" fontSize={{ base: '14px', md: '16px', lg: '17px' }} >Promotions</Button>
      </Box>
    </Box>
  );
}

export default ProfileButtons;