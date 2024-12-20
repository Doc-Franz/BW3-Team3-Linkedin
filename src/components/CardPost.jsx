import "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

function CardPost() {
  const userInfo = useSelector((state) => state.hero.content);
  return (
    <Card className="my-3 shadow-sm">
      <form>
        <Row className="align-items-center justify-content-left m-2 mt-3">
          {/* Sezione Avatar */}
          <Col xs="auto">
            {userInfo && <Image style={{ height: "70px", width: "70px", objectFit: "cover", border: "2px solid white" }} roundedCircle src={userInfo.image} />}
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
                    padding: "8px 16px"
                  }}
                />
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>

        {/* Opzioni Contenuti */}
        <Row className="text-center mt-3">
          <Col className="d-flex ">
            <Button variant="link" className="text-black fw-bold text-decoration-none" type="button">
              <i className="bi bi-image text-black"></i> Contenuti multimediali
            </Button>
          </Col>
          <Col>
            <Button variant="link" className="text-black fw-bold text-decoration-none" type="button">
              <i className="bi bi-calendar3 text-black"></i> Evento
            </Button>
          </Col>
          <Col>
            <Button variant="link" className="text-black fw-bold text-decoration-none" type="button">
              <i className="bi bi-layout-text-window-reverse text-black"></i> Scrivi un articolo
            </Button>
          </Col>
        </Row>
      </form>
    </Card>
  );
}

export default CardPost;
