import { Container } from "react-bootstrap";
import ImageProfile from "./ImageProfile";
import MainProfileActivity from "./MainProfileActivity";
import MainProfileAnalytics from "./MainProfileAnalytics";
import MainProfileSection from "./MainProfileSection";
import MainProfileExperiences from "./MainProfileExperiences";
import RightSidebar from "./RightSidebar";

const MainProfilePage = () => {
  return (
    <>
      <Container>
        <MainProfileSection />
        <MainProfileAnalytics />
        <MainProfileActivity />
        <MainProfileExperiences />
        <ImageProfile />
      </Container>
      <RightSidebar />
    </>
  );
};

export default MainProfilePage;
