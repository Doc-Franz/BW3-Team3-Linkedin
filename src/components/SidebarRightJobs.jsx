import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Linkedin, Plus } from "react-bootstrap-icons";

const SidebarRightJobs = () => {
  return (
    <Container className="global-footer py-4">
      <Row className="text-center">
        <Col className="text-nowrap text-center mb-2">
          <Link to={"https://about.linkedin.com/it-it"} target="_blank">
            Informazioni
          </Link>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Link to={"https://about.linkedin.com/it-it"} target="_blank">
            Accessibilità
          </Link>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Link to={"https://about.linkedin.com/it-it"} target="_blank">
            Centro assistenza
          </Link>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                fontSize: "14px",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                padding: "0",
                color: "black"
              }}
            >
              <Link to={"https://about.linkedin.com/it-it"} target="_blank">
                Privacy e condizioni
              </Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Contratto di licenza</Dropdown.Item>
              <Dropdown.Item href="#">Termini e condizioni delle pagine</Dropdown.Item>
              <Dropdown.Item href="#">Informativa sul copyright</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Link to={"https://about.linkedin.com/it-it"} target="_blank">
            Opzioni per gli annunci pubblicitari
          </Link>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Link to={"https://about.linkedin.com/it-it"} target="_blank">
            Pubblicità
          </Link>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                fontSize: "14px",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                padding: "0",
                color: "black"
              }}
            >
              <Link to={"https://about.linkedin.com/it-it"} target="_blank">
                Servizi alle aziende
              </Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Impara con Linkedin</Dropdown.Item>
              <Dropdown.Item href="#">Admin Center</Dropdown.Item>
              <Dropdown.Item href="#">
                Crea una pagina aziendale <Plus />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Link to={"https://about.linkedin.com/it-it"} target="_blank">
            Scarica l&apos;app LinkedIn
          </Link>
        </Col>
        <Col className="text-nowrap text-center mb-2">
          <Link to={"https://about.linkedin.com/it-it"} target="_blank">
            Altro
          </Link>
        </Col>
      </Row>

      <Row className="text-center mt-3">
        <Col className="d-flex justify-content-center text-black align-items-baseline">
          <span className="text-primary fs-5 fw-semibold">
            Linked <Linkedin className="mt-0" />{" "}
          </span>{" "}
          <span className="ms-1">LinkedIn Corporation © 2024</span>
        </Col>
      </Row>
    </Container>
  );
};

export default SidebarRightJobs;
