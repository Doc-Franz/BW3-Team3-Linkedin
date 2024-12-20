import Competence from "./Competence";
import Experience from "./Experience";
import Formations from "./Formation";
import Interest from "./Interest";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import SideBarRight from "./SideBarRight";
import { fetchProfile } from "../redux/actions/profileActions";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [id]);

  return (
    <>
      <Container>
        <Row>
          <Col md={9} style={{ marginTop: "90px" }}>
            <Hero flag={false} />
            <Dashboard flag={false} />
            <Experience flag={false} />
            <Formations flag={false} />
            <Competence flag={false} />
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

export default ProfilePage;
