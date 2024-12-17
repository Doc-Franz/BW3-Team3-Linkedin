import Competence from "./Competence";
import Experience from "./Experience";
import Formations from "./Formation";
import Interest from "./Interest";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import { Col, Container, Row } from "react-bootstrap";
import SideBarRight from "./SideBarRight";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <Hero />
            <Dashboard />
            <Experience />
            <Formations />
            <Competence />
            <Interest />
          </Col>
          <Col md={3}>
            <SideBarRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
