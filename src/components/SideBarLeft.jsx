import "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function LinkedInLeftCards() {
  return (
    <Container className="my-3">
      <Row>
        {/* Colonna Sinistra */}
        <Col>
          {/* CARD 1: Profilo Utente */}
          <Card className="mb-3 shadow-sm">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x100"
              alt="Background"
            />
            <Card.Body className="text-left">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  backgroundColor: "#ccc",
                  marginRight: "-50%",
                  marginTop: "-35px",
                  border: "2px solid white",
                }}
              ></div>
              <Card.Title className="mt-2">Nome Utente</Card.Title>
              <Card.Text>Lavoro E Settore</Card.Text>
              <Card.Text className="text-secondary">Area</Card.Text>
              <Card.Text className="fw-bold d-flex">
                {" "}
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#ccc",
                  }}
                ></div>
                <span className="ms-2">Settore</span>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* CARD 2: Recenti */}
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Text className="fw-bold d-flex justify-content-between">
                Visualizzazioni del profilo{" "}
                <span className="text-primary">16</span>
              </Card.Text>
              <Card.Text className="fw-bold">
                {" "}
                <a>Visualizza tutte le analisi</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Text>
                <span className="fw-light">
                  Accedi a strumenti e Informazioni in esclusiva <br />
                </span>
                <i className="bi bi-slash-square-fill cuadro"></i>
                <span className="fw-bold ms-2">
                  Fatti assumere piu velocemente. Prova Premiun gratis
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Text className="fw-bold ">
                {" "}
                <i className="bi bi-bookmark-fill text-black "></i>
                <span className="ms-2">Elementi salvati </span>
              </Card.Text>

              <Card.Text className="fw-bold ">
                <i className="bi bi-people-fill"></i>
                <span className="ms-2">Gruppi</span>
              </Card.Text>
              <Card.Text className="fw-bold">
                <i className="bi bi-calendar2-event text-black"></i>
                <span className="ms-2">Eventi</span>
              </Card.Text>
              <Card.Text className="fw-bold">
                <i className="bi bi-newspaper"></i>{" "}
                <span className="ms-2">Newsletter</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LinkedInLeftCards;
