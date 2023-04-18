import { Container } from "react-bootstrap";
import MainProfileActivity from "./MainProfileActivity";
import MainProfileAnalytics from "./MainProfileAnalytics";
import MainProfileSection from "./MainProfileSection";
import ImageProfile from "./ImageProfile";

const MainProfilePage = () => {
  return (
    <>
      <Container>
        <MainProfileSection />
        <MainProfileAnalytics />
        <MainProfileActivity />
        <ImageProfile />
      </Container>
    </>
  );
};

export default MainProfilePage;
