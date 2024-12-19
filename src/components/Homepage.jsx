import { Card, CardBody, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { HandThumbsUp, ChatText, Arrow90degRight, Send, X, ThreeDots, HandThumbsUpFill, GlobeEuropeAfrica } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepage } from "../redux/actions/homepageActions";
import { fetchProfile } from "../redux/actions/profileActions";
import SideBarLeft from "./SideBarLeft";
import SidebarRightHomepage from "./SidebarRightHomepage";
import Footer from "./Footer";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile("me"));
    dispatch(fetchHomepage());
  }, []);

  const postHomepage = useSelector((state) => state.homepage.content);
  const postHomepageReversed = postHomepage.slice().reverse().slice(0, 20);

  return (
    <>
      <Container>
        <Row className="mb-3" style={{ marginTop: "90px" }}>
          <Col md={3}>
            <SideBarLeft />
          </Col>
          <Col md={6}>
            {postHomepage.length > 0 &&
              postHomepageReversed.map((post) => (
                <Card className="mt-3" key={post._id}>
                  <Row className="mt-2 me-1">
                    <Col className="col-9">
                      <Row className="align-items-start ms-2">
                        <Col sm={4} lg={3}>
                          <Image src={post.user.image} className="img-fluid" style={{ maxHeight: "100px", objectFit: "cover" }} />
                        </Col>
                        <Col className="d-flex flex-column">
                          <p className="fw-semibold fs-4 mb-0">{post.user.username}</p>
                          <p className="fs-6 text-secondary mb-0">110.676 follower</p>
                          <p className="fs-6 text-secondary mb-0">
                            {new Date(post.createdAt).toLocaleString("it-IT", {
                              weekday: "short",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}{" "}
                            • <GlobeEuropeAfrica className="fs-4" />
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <ThreeDots className="fs-3 me-3" style={{ cursor: "pointer" }} /> <X className="fs-3" style={{ cursor: "pointer" }} />
                    </Col>
                  </Row>

                  <CardBody>
                    <Row>
                      <Col>{post.text}</Col>
                    </Row>
                  </CardBody>

                  <Card.Img className="img-fluid" variant="top" src={post.user.image} />
                  <Card.Body className="py-0">
                    <Row className="mt-2">
                      <Col className="d-flex align-items-center">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle me-2"
                          style={{ width: "20px", height: "20px", backgroundColor: "blue", cursor: "pointer" }}
                        >
                          <HandThumbsUpFill style={{ width: "15px", height: "15px", fill: "white" }} />
                        </div>{" "}
                        <ListGroup.Item>23</ListGroup.Item>
                      </Col>
                      <Col className="d-flex justify-content-end text-secondary">2 commenti • 4 diffusioni post</Col>
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
              ))}
          </Col>
          <Col md={3}>
            <SidebarRightHomepage />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
