import "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function CardPost() {
  return (
    <Card className="my-3 shadow-sm">
      <form>
        <Row className="align-items-center justify-content-left m-2 mt-3">
          {/* Sezione Avatar */}
          <Col xs="auto">
            <div
              className="d-flex"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
              }}
            ></div>
          </Col>

          {/* Input per "Crea un post" */}
          <Col xs={10} className="p-0">
            <Card.Body className="d-flex justify-content-center p-0">
              <Card.Text className="w-100">
                <input
                  type="text"
                  placeholder="Crea un post"
                  className="form-control"
                  style={{
                    borderRadius: "50px",
                    border: "1px solid #ddd",
                    padding: "8px 16px",
                  }}
                />
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>

        {/* Opzioni Contenuti */}
        <Row className="text-center mt-3">
          <Col className="d-flex ">
            <Button
              variant="link"
              className="text-black fw-bold text-decoration-none"
              type="button"
            >
              <i className="bi bi-image text-black"></i> Contenuti multimediali
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              className="text-black fw-bold text-decoration-none"
              type="button"
            >
              <i className="bi bi-calendar3 text-black"></i> Evento
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              className="text-black fw-bold text-decoration-none"
              type="button"
            >
              <i className="bi bi-layout-text-window-reverse text-black"></i>{" "}
              Scrivi un articolo
            </Button>
          </Col>
        </Row>
      </form>
    </Card>
  );
}

export default CardPost;
