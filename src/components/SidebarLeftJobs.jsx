import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ListUl, BookmarkFill, PencilSquare } from "react-bootstrap-icons";

const SidebarLeftJobs = () => {
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
                    <Image
                      style={{ height: "30px", width: "30px", objectFit: "cover" }}
                      roundedCircle
                      src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1742428800&amp;v=beta&amp;t=1545nc7H976MH9PquSOoKQx-4ziZtAD1DU3H-k2vuig"
                    />
                    <span className="ms-2">{experiences[0].company}</span>
                  </>
                )}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm py-2">
            <Card.Body>
              <Card.Text className="fw-bold mb-4">
                <ListUl />
                <span className="ms-2">Preferenze</span>
              </Card.Text>
              <Card.Text className="fw-bold ">
                {" "}
                <BookmarkFill />
                <span className="ms-2">Le mie offerte di lavoro </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <Button variant="outline-primary" className="rounded-pill">
                <PencilSquare className="me-2" /> Pubblica offerta gratuitamente
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SidebarLeftJobs;
