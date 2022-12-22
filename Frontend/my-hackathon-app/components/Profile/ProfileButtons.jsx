
import React from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@chakra-ui/react";

const ButtonWrapper = styled.div`
  padding: 25px 20px;
`;

// const ButtonRow = styled.div`
//   display: flex;
//   :not(:last-child) {
//     margin-bottom: 8px;
//   }
// `;

// const Button = styled.button`
//   background-color: transparent;
//   color: inherit;
//   border: 1px solid #919191;
//   padding: 12px 0;
//   cursor: pointer;
//   width: 100%;
//   border-radius: 5px;
//   font-size: 14px;
//   :not(:last-child) {
//     margin-right: 8px;
//   }
// `;

function ProfileButtons() {
  return (
    <ButtonWrapper>
      <Box display="flex" justifyContent="space-around" gap="4%" > 
        <Button w="100%" fontSize={{ base: '14px', md: '16px', lg: '17px' }} >Edit Profile</Button>
        <Button w="100%" fontSize={{ base: '14px', md: '16px', lg: '17px' }} >Promotions</Button>
      </Box>
      {/* <ButtonRow>
        <Button>Insights</Button>
        <Button>Add Shop</Button>
        <Button>Contact</Button>
      </ButtonRow> */}
    </ButtonWrapper>
  );
}

export default ProfileButtons;