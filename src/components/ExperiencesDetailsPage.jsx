import React from "react";
import { Container } from "react-bootstrap";
import MainProfileSection from "./MainProfileSection";
import ExperiencesDetails from "./ExperiencesDetails";

function ExperiencesDetailsPage() {
  return (
    <>
      <Container>
        <MainProfileSection />
        <ExperiencesDetails />
      </Container>
    </>
  );
}

export default ExperiencesDetailsPage;
