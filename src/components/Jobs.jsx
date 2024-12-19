import { Col, Container, Row } from "react-bootstrap";
import SidebarLeftJobs from "./SidebarLeftJobs";
import SidebarRightJobs from "./SidebarRightJobs";

const Jobs = () => {
  return (
    <Container>
      <Row className="mb-3">
        <Col md={3}>
          <SidebarLeftJobs />
        </Col>
        <Col md={6}>
          <h1>prova</h1>
        </Col>
        <Col md={3}>
          <SidebarRightJobs />
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
