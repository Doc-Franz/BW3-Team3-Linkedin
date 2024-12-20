import Competence from "./Competence";
import Experience from "./Experience";
import Formations from "./Formation";
import Interest from "./Interest";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import SideBarRight from "./SideBarRight";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9} style={{ marginTop: "90px" }}>
            <Hero flag={true} />
            <Dashboard flag={true} />
            <Experience flag={true} />
            <Formations flag={true} />
            <Competence flag={true} />
            <Interest />
          </Col>
          <Col md={3} style={{ marginTop: "90px" }}>
            <SideBarRight />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
