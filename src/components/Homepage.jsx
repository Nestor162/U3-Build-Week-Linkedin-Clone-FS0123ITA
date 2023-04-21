import { Container } from "react-bootstrap";
import HomepageLeftSidebar from "./HomepageLeftSidebar";
import HomepagePostCreator from "./HomepagePostCreator";
import HomepagePosts from "./HomepagePosts";
import RightSidebarHome from "./RightSidebarHome";

const Homepage = () => {
  return (
    <>
      <Container className="homepageContainer">
        <HomepageLeftSidebar />
        <Container className="homepageMainContainer">
          <HomepagePostCreator />
          <hr className="mt-3 mx-4 homeMainContainer" />
          <HomepagePosts />
        </Container>
        <RightSidebarHome />
      </Container>
    </>
  );
};

export default Homepage;
