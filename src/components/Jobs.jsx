import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import SidebarLeftJobs from "./SidebarLeftJobs";
import SidebarRightJobs from "./SidebarRightJobs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fillJobsPage } from "../redux/actions/jobActions";
import { HandThumbsUpFill, Linkedin, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Jobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillJobsPage());
  }, []);

  const jobsArray = useSelector((state) => state.jobs.content.data);
  const jobsArrayReversed = Array.isArray(jobsArray) ? jobsArray.slice().reverse().slice(0, 4) : [];

  return (
    <Container>
      <Row className="mb-3 " style={{ marginTop: "90px" }}>
        <Col md={3}>
          <SidebarLeftJobs />
        </Col>
        <Col md={6}>
          {jobsArray &&
            jobsArray.length > 0 &&
            jobsArrayReversed.map((job) => (
              <Card className="mt-3" key={job._id}>
                <Row className="mt-2 me-1">
                  <Col className="col-10">
                    <Row className="align-items-start ms-2">
                      <Col sm={4} lg={3}>
                        <Image
                          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="img-fluid"
                          style={{ maxHeight: "130px", objectFit: "cover" }}
                        />
                      </Col>
                      <Col className="d-flex flex-column mb-1">
                        <Link style={{ textDecoration: "none" }}>
                          <p className="fw-semibold fs-5 mb-0 text-primary">{job.title}</p>
                        </Link>

                        <p className="fs-6  mb-0">{job.company_name}</p>
                        <p className="fs-6 text-secondary mb-0">{job.candidate_required_location}</p>
                        <Row className="mt-1">
                          <Col className="text-secondary" style={{ fontSize: "12px" }}>
                            Promosso • <span className="text-success mx-1 fw-semibold">Invia una delle prime candidature •</span>
                            <Linkedin className="me-1 text-primary" />
                            Candidatura semplice
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <X className="fs-3" style={{ cursor: "pointer" }} />
                  </Col>
                </Row>
              </Card>
            ))}
        </Col>
        <Col md={3}>
          <SidebarRightJobs />
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
