
import React from "react";
import styled from "@emotion/styled";
import Grid from "../../assets/Grid";
import Reels from "../../assets/Reels";
import IGTV from "../../assets/IGTV";
// import Guides from "../assets/Guides";
import Tags from "../../assets/Tags";

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.div`
  padding: 3% 8% 3% ;
  width: 100%;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? "2px solid white" : "1px solid #111"};
  svg {
    fill: ${(props) => (props.isActive ? "black" : "#919191")};
    transform: scale(2);
  }
`;

function Tabs() {
  return (
    <TabsWrapper>
      <Tab isActive>
        <Grid />
      </Tab>
      <Tab>
        <Reels />
      </Tab>
      <Tab>
        <IGTV />
      </Tab>
      {/* <Tab>
        <Guides />
      </Tab> */}
      <Tab>
        <Tags />
      </Tab>
    </TabsWrapper>
  );
}

export default Tabs;