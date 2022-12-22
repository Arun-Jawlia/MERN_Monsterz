
import React from "react";
import styled from "@emotion/styled";
// import highlight1 from "../assets/highlight1.png";
// import highlight2 from "../assets/highlight2.png";
// import highlight3 from "../assets/highlight3.png";
// import highlight4 from "../assets/highlight4.png";
// import highlight5 from "../assets/highlight5.png";

let highlightsArray = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKlAii5CEYgd3bxCdCE2uwHQo8KeCIAmGZNRNJxKuYQ&s", label: "WEB-DEV" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKlAii5CEYgd3bxCdCE2uwHQo8KeCIAmGZNRNJxKuYQ&s", label: "FUN QNAs" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKlAii5CEYgd3bxCdCE2uwHQo8KeCIAmGZNRNJxKuYQ&s", label: "OUR JOURNEY" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKlAii5CEYgd3bxCdCE2uwHQo8KeCIAmGZNRNJxKuYQ&s", label: "HELPFUL QNAs" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKlAii5CEYgd3bxCdCE2uwHQo8KeCIAmGZNRNJxKuYQ&s", label: "CSS/JS EFFECTS" },
];

const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
`;

const HighLightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  :not(:last-child) {
    margin-right: 25px;
  }
`;

const HighLightImage = styled.img`
  max-width: 75px;
  border-radius: 50%;
  border: 1px solid #919191;
  padding: 4px;
`;

const HighLightLabel = styled.span`
  font-size: 12px;
  white-space: nowrap;
  margin-top: 6px;
`;

function Highlights() {
  return (
    <Wrapper>
      {highlightsArray.map((highlight) => (
        <HighLightWrapper>
          <HighLightImage src={highlight.src} />
          <HighLightLabel>{highlight.label}</HighLightLabel>
        </HighLightWrapper>
      ))}
    </Wrapper>
  );
}

export default Highlights;