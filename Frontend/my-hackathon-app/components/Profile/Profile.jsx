
import React from "react";
import styled from "@emotion/styled";
import TopNav from "./TopNav";
import ViewDashboard from "./ViewDashboard";
import About from "./About";
import ProfileDetails from "./ProfileDetails";
import ProfileButtons from "./ProfileButtons";
// import Highlights from "./Highlights";
import Tabs from "./Tabs";
import PostGrid from "./PostGrid";


// background-color: #000;
const ProfileWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function Profile() {
  return (
    <ProfileWrapper>
      <TopNav />
      <ViewDashboard />
      <ProfileDetails />
      <About />
      <ProfileButtons />
      {/* <Highlights /> */}
      <Tabs />
      <PostGrid />
    </ProfileWrapper>
  );
}

export default Profile;