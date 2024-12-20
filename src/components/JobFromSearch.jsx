import { useState } from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { ArrowRight, Linkedin, X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";

const JobFromSearch = () => {
  const { jobToSearch } = useParams();

  const [activeJobId, setActiveJobId] = useState(null);

  // Array che contiente le info del job dal search
  const jobsFromSearch = useSelector((state) => state.jobMoreChance.content.data);
  const jobsFromSearchReversed = Array.isArray(jobsFromSearch) ? jobsFromSearch.slice().reverse().slice(0, 12) : [];

  // Funzione che gestisce se mostrare o meno la descrizione del job
  const toggleDescription = (jobId) => {
    setActiveJobId((prevJobId) => (prevJobId === jobId ? null : jobId));
  };

  return (
    <Container style={{ marginTop: "90px" }}>
      <Row className="mb-3 ">
        <Col>
          <ListGroup className="mt-3">
            <ListGroup.Item>
              <Row className="mt-3 fs-4 fw-semibold">
                <Col>
                  Offerte di lavoro per: <span className="text-primary">{jobToSearch}</span>
                </Col>
              </Row>
              <Row className="text-secondary"> {jobsFromSearch && <Col>{jobsFromSearch.length} risultati</Col>}</Row>
            </ListGroup.Item>

            {jobsFromSearch &&
              jobsFromSearch.length > 0 &&
              jobsFromSearchReversed.map((job) => (
                <ListGroup.Item key={job._id}>
                  <Row className="mt-2 me-1">
                    <Col
                      className="col-10"
                      onClick={() => {
                        toggleDescription(job._id);
                      }}
                    >
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
                              {new Date(job.publication_date).toLocaleString("it-IT", {
                                weekday: "short",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}{" "}
                              • <span className="text-success mx-1 fw-semibold">Invia una delle prime candidature •</span>
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
                  {activeJobId === job._id && (
                    <Row className="mt-2">
                      <Col>
                        <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                      </Col>
                    </Row>
                  )}
                </ListGroup.Item>
              ))}
            <ListGroup.Item>
              <Row className="text-center ">
                <Col className="fw-semibold" style={{ cursor: "pointer" }}>
                  Mostra tutto <ArrowRight className="ms-2" />
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default JobFromSearch;
