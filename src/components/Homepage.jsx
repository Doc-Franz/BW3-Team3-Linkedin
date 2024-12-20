import { Card, CardBody, Col, Container, Dropdown, Form, Image, ListGroup, Row } from "react-bootstrap";
import { HandThumbsUp, ChatText, Arrow90degRight, Send, X, ThreeDots, HandThumbsUpFill, GlobeEuropeAfrica } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepage } from "../redux/actions/homepageActions";
import { fetchProfile } from "../redux/actions/profileActions";
import SideBarLeft from "./SideBarLeft";
import SidebarRightHomepage from "./SidebarRightHomepage";
import Footer from "./Footer";
import CardPost from "./CardPost";
import { updatePost, deletePost } from "../redux/actions/homepageActions";
import Comments from "./Comments";

const Homepage = () => {
  const dispatch = useDispatch();
  const postHomepage = useSelector((state) => state.homepage.content);
  const commentsStore = useSelector((state) => state.comments.comments);
  const postHomepageReversed = postHomepage.slice().reverse().slice(0, 20);
  const userInfo = useSelector((state) => state.hero.content);
  const [activePostId, setActivePostId] = useState(null);

  const toggleComments = (postId) => {
    setActivePostId((prev) => (prev === postId ? null : postId));
  };

  const [editingPostId, setEditingPostId] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    dispatch(fetchProfile("me"));
    dispatch(fetchHomepage());
  }, []);

  const handleEditClick = (postId, currentText) => {
    setEditingPostId(postId);
    setEditedText(currentText);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleKeyPress = async (e, postId) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (editedText.trim() === "") {
        alert("Il testo del post non può essere vuoto.");
        return;
      }

      // Aggiorna il post tramite fetch PUT
      await dispatch(updatePost(postId, { text: editedText }));

      // Reset delle variabili di stato
      setEditingPostId(null);
      setEditedText("");
    }
  };

  const handleDeletePost = (postId) => {
    if (window.confirm("Sei sicuro di voler eliminare questo post?")) {
      dispatch(deletePost(postId));
    }
  };

  return (
    <>
      <Container>
        <Row className="mb-3" style={{ marginTop: "90px" }}>
          <Col md={3}>
            <SideBarLeft />
          </Col>
          <Col md={6}>
            <CardPost />
            {postHomepage.length > 0 &&
              postHomepageReversed.map((post) => {
                const commentsCount = commentsStore[post._id]?.length || 0;

                return (
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
                        <Dropdown align={"end"}>
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
                            className="post-dropdown"
                          >
                            <ThreeDots
                              className="fs-3 me-3"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                console.log(post.user._id);
                              }}
                            />
                          </Dropdown.Toggle>

                          {post.user._id === userInfo._id && (
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleEditClick(post._id, post.text)}
                                className="d-flex align-items-center text-primary fw-bold"
                                style={{ cursor: "pointer", fontSize: "14px" }}
                              >
                                <i className="bi bi-pencil me-2"></i> Modifica Post
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleDeletePost(post._id)}
                                className="d-flex align-items-center text-danger fw-bold"
                                style={{ cursor: "pointer", fontSize: "14px" }}
                              >
                                <i className="bi bi-trash3 me-2"></i> Elimina Post
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          )}
                        </Dropdown>
                        <X className="fs-3" style={{ cursor: "pointer" }} />
                      </Col>
                    </Row>

                    <CardBody>
                      <Row>
                        <Col>
                          {editingPostId === post._id ? (
                            <Form.Control
                              type="text"
                              value={editedText}
                              onChange={handleTextChange}
                              onKeyPress={(e) => handleKeyPress(e, post._id)}
                              autoFocus
                            />
                          ) : (
                            post.text
                          )}
                        </Col>
                      </Row>
                    </CardBody>

                    {post.image && <Card.Img className="img-fluid" variant="top" src={post.image} />}
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
                        <Col className="d-flex justify-content-end text-secondary">{commentsCount} commenti • 4 diffusioni post</Col>
                      </Row>
                      <hr />
                    </Card.Body>

                    <Card.Body className="py-3">
                      <Row className="text-center fw-semibold">
                        <Col style={{ cursor: "pointer" }}>
                          <HandThumbsUp /> Consiglia
                        </Col>
                        <Col style={{ cursor: "pointer" }} onClick={() => toggleComments(post._id)}>
                          <ChatText /> Commenta
                        </Col>
                        {activePostId === post._id && <Comments postId={post._id} />}
                        <Col style={{ cursor: "pointer" }}>
                          <Arrow90degRight /> Diffondi il post
                        </Col>
                        <Col style={{ cursor: "pointer" }}>
                          <Send /> Invia
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                );
              })}
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
