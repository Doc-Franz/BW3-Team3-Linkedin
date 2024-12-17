import "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="global-footer bg-light py-4">
      <Container>
        <Row>
          {/* Prima Colonna */}
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="https://about.linkedin.com/it-it" target="_blank">
                Informazioni
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/legal/professional-community-policies"
                target="_blank"
              >
                Informativa sulla community professionale
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank"
              >
                Privacy e condizioni
              </Nav.Link>
              <Nav.Link
                href="https://business.linkedin.com/sales-solutions"
                target="_blank"
              >
                Sales Solutions
              </Nav.Link>
              <Nav.Link href="https://safety.linkedin.com" target="_blank">
                Centro sicurezza
              </Nav.Link>
            </Nav>
            <p className="mt-3 t-12 ">
              <span className="text-primary">LinkedIn Corporation © 2024</span>
            </p>
          </Col>

          {/* Seconda Colonna */}
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link
                href="https://www.linkedin.com/accessibility"
                target="_blank"
              >
                Accessibilità
              </Nav.Link>
              <Nav.Link href="https://careers.linkedin.com/" target="_blank">
                Carriera
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/help/linkedin/answer/62931"
                target="_blank"
              >
                Opzioni per gli annunci pubblicitari
              </Nav.Link>
              <Nav.Link
                href="https://mobile.linkedin.com/it-it"
                target="_blank"
              >
                Mobile
              </Nav.Link>
            </Nav>
          </Col>

          {/* Terza Colonna */}
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link
                href="https://business.linkedin.com/it-it/talent-solutions"
                target="_blank"
              >
                Talent Solutions
              </Nav.Link>
              <Nav.Link
                href="https://business.linkedin.com/it-it/marketing-solutions"
                target="_blank"
              >
                Soluzioni di marketing
              </Nav.Link>
              <Nav.Link
                href="https://business.linkedin.com/it-it/marketing-solutions/ads"
                target="_blank"
              >
                Pubblicità
              </Nav.Link>
              <Nav.Link
                href="https://smallbusiness.linkedin.com"
                target="_blank"
              >
                Piccole imprese
              </Nav.Link>
            </Nav>
          </Col>

          {/* Quarta Colonna */}
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link
                href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                target="_blank"
              >
                <i className="bi bi-question-circle-fill"></i> Domande?
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/psettings/"
                target="_blank"
              >
                <i className="bi bi-gear-fill"></i> Gestisci il tuo account e la
                tua privacy
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/help/linkedin/answer/a1339724"
                target="_blank"
              >
                <i className="bi bi-shield-shaded"></i> Trasparenza sui
                contenuti consigliati
              </Nav.Link>
            </Nav>
          </Col>

          {/* Quinta Colonna */}
          <Col md={4} className="text-md-end">
            <Form.Group controlId="globalfooter-select_language">
              <Form.Label>Seleziona lingua</Form.Label>
              <Form.Control as="select" className="t-12 t-black--light t-bold">
                <option value="it_IT">Italiano (Italiano)</option>
                <option value="en_US">English (Inglese)</option>
                <option value="fr_FR">Français (Francese)</option>
                <option value="de_DE">Deutsch (Tedesco)</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
