import "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

function SideBarLeft() {
  const userInfo = useSelector((state) => state.hero.content);
  const experiences = useSelector((state) => state.experience.experiences);

  return (
    <Container className="my-3">
      <Row>
        {/* Colonna Sinistra */}
        <Col>
          {/* CARD 1: Profilo Utente */}
          <Card className="mb-3 shadow-sm">
            <Card.Img variant="top" src="https://thingscareerrelated.com/wp-content/uploads/2021/10/default-background-image.png?w=862" alt="Background" />
            <Card.Body className="text-left">
              {userInfo && (
                <>
                  <Image
                    style={{ height: "70px", width: "70px", objectFit: "cover", marginRight: "-50%", marginTop: "-35px", border: "2px solid white" }}
                    roundedCircle
                    src={userInfo.image}
                  />
                  <Card.Title className="mt-2">{userInfo.name}</Card.Title>
                  <Card.Text>{userInfo.title}</Card.Text>
                  <Card.Text className="text-secondary">{userInfo.area}</Card.Text>
                </>
              )}
              <Card.Text className="fw-bold d-flex">
                {experiences.length > 0 && (
                  <>
                    <Image style={{ height: "30px", width: "30px", objectFit: "cover" }} roundedCircle src={experiences[0].image} />
                    <span className="ms-2">{experiences[0].company}</span>
                  </>
                )}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* CARD 2: Recenti */}
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Text className="fw-bold d-flex justify-content-between">
                Visualizzazioni del profilo <span className="text-primary">16</span>
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
                <span className="fw-bold ms-2">Fatti assumere piu velocemente. Prova Premiun gratis</span>
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
                <i className="bi bi-newspaper"></i> <span className="ms-2">Newsletter</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SideBarLeft;
