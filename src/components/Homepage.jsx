import {
  Card,
  CardBody,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import {
  HandThumbsUp,
  ChatText,
  Arrow90degRight,
  Send,
  X,
  ThreeDots,
  HandThumbsUpFill,
  GlobeEuropeAfrica,
} from "react-bootstrap-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepage } from "../redux/actions/homepageActions";
import { fetchProfile } from "../redux/actions/profileActions";
import SideBarLeft from "./SideBarLeft";
import SidebarRightHomepage from "./SidebarRightHomepage";
import CardPost from "./CardPost";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile("me"));
    dispatch(fetchHomepage());
  }, [dispatch]);

  const postHomepage = useSelector((state) => state.homepage.content);
  const postHomepageReversed = postHomepage.slice().reverse().slice(0, 20);

  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <SideBarLeft />
          </Col>

          <Col md={6}>
            <CardPost />
            <Card className="mt-3">
              <Row className="mt-2 me-1">
                <Col className="col-9">
                  <Row className="align-items-center">
                    <Col sm={4} lg={3}>
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bSdmyPGsBkS5WQ7fjHWoPIcYcHnOUlJ1cQ&s"
                        className="img-fluid"
                        style={{ maxHeight: "100px", objectFit: "cover" }}
                      />
                    </Col>

                    <Col className="d-flex flex-column">
                      <p className="fw-semibold fs-4 mb-0">BMW Group Italia</p>
                      <p className="fs-6 text-secondary mb-0">
                        110.676 follower
                      </p>
                      <p className="fs-6 text-secondary mb-0">
                        16 minuti • <GlobeEuropeAfrica className="fs-4" />
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="d-flex justify-content-end">
                  <ThreeDots
                    className="fs-3 me-3"
                    style={{ cursor: "pointer" }}
                  />{" "}
                  <X className="fs-3" style={{ cursor: "pointer" }} />
                </Col>
              </Row>

              <CardBody>
                <Row>
                  <Col>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis itaque veritatis, amet suscipit architecto eius
                    eligendi, excepturi
                  </Col>
                </Row>
              </CardBody>

              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bSdmyPGsBkS5WQ7fjHWoPIcYcHnOUlJ1cQ&s"
                style={{ height: "200px" }}
              />
              <Card.Body className="py-0">
                <Row>
                  <Col className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-2"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "blue",
                        cursor: "pointer",
                      }}
                    >
                      <HandThumbsUpFill
                        style={{ width: "15px", height: "15px", fill: "white" }}
                      />
                    </div>{" "}
                    <ListGroup.Item>23</ListGroup.Item>
                  </Col>
                  <Col className="d-flex justify-content-end text-secondary">
                    2 commenti • 4 diffusioni post
                  </Col>
                </Row>
                <hr />
              </Card.Body>

              <Card.Body className="py-3">
                <Row className="text-center fw-semibold">
                  <Col style={{ cursor: "pointer" }}>
                    <HandThumbsUp /> Consiglia
                  </Col>
                  <Col style={{ cursor: "pointer" }}>
                    <ChatText /> Commenta
                  </Col>
                  <Col style={{ cursor: "pointer" }}>
                    <Arrow90degRight /> Diffondi il post
                  </Col>
                  <Col style={{ cursor: "pointer" }}>
                    <Send /> Invia
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <SidebarRightHomepage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
