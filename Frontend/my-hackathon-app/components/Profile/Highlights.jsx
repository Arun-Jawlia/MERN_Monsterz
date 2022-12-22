
import React from "react";
import styled from "@emotion/styled";
import { Box, Image, Text } from "@chakra-ui/react";

let highlightsArray = [
  { src: "https://storage.needpix.com/rsynced_images/head-659652_1280.png", label: "WEB-DEV" },
  { src: "https://www.kindpng.com/picc/m/72-723761_student-png-sammilani-mahavidyalaya-undergraduate-and-dummy-user.png", label: "React-DEV" },
  { src: "https://storage.needpix.com/rsynced_images/head-659652_1280.png", label: "JAVA-DEV" },
  { src: "https://www.kindpng.com/picc/m/72-723761_student-png-sammilani-mahavidyalaya-undergraduate-and-dummy-user.png", label: "Next.Js-DEV" },
  { src: "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg", label: "CSS-DEV" },
];

const HighLightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  :not(:last-child) {
    margin-right: 25px;
  }
`;


function Highlights() {
  return (
    <Box display="flex" padding="0 20px">
      {highlightsArray.map((highlight) => (
        <HighLightWrapper>
          <Image maxW="75px" borderRadius="50%" border="1px solid #919191" padding="4px" src={highlight.src} />
          <Text fontSize="12px" whiteSpace="nowrap" marginTop="6px" >{highlight.label}</Text>
        </HighLightWrapper>
      ))}
    </Box>
  );
}

export default Highlights;