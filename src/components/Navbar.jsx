import { Button, Col, Container, Dropdown, Form, Image, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import {
  Linkedin,
  Search,
  HouseDoorFill,
  PeopleFill,
  SuitcaseLgFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
  PersonLinesFill,
  BarChartFill,
  PencilSquare,
  Shop,
  MegaphoneFill,
  BookFill
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { BsCompass } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import { fetchExperiences } from "../redux/actions/experienceActions";
import { useEffect } from "react";
import { fillJobsMoreChancePage } from "../redux/actions/jobActions";

function MyNavbar() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.hero.content);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProfile("me"));
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo._id) {
      dispatch(fetchExperiences(userInfo._id));
    }
  }, [dispatch, userInfo]);

  // funzione che gestisce l'input dalla barra del search
  const handleSubmit = (e) => {
    e.preventDefault();
    const jobToSearch = e.target.elements.searchProfile.value;
    dispatch(fillJobsMoreChancePage(jobToSearch));
    navigate(`/jobs/${jobToSearch}`);
    e.target.elements.searchProfile.value = "";
  };

  return (
    <Navbar expand="lg" className="bg-white border-bottom shadow-sm py-0 fixed-top">
      <Container className="px-0">
        <Navbar.Collapse id="navbarScroll">
          <Row className="w-100 align-items-center justify-content-between m-0">
            {/* LinkedIn Icon */}
            <Col xs="auto" className="d-flex align-items-center mt-2">
              <Link to="/">
                <Linkedin size={40} style={{ color: "#0077b5" }} />
              </Link>
            </Col>

            {/* Search Input */}
            <Col className="d-flex align-items-center mt-2" style={{ maxWidth: "300px" }}>
              <Form className="w-100" onSubmit={handleSubmit}>
                <InputGroup>
                  <InputGroup.Text className="bg-light border-0">
                    <Search />
                  </InputGroup.Text>
                  <Form.Control
                    id="searchProfile"
                    placeholder="Cerca"
                    aria-label="Cerca"
                    aria-describedby="basic-addon1"
                    className="border-0 bg-light"
                    autoComplete="off"
                  />
                </InputGroup>
              </Form>
            </Col>

            {/* Navbar Links */}
            <Col className="d-flex justify-content-center mt-2">
              <Nav className="d-flex gap-4 align-items-center">
                <Link to="/" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <HouseDoorFill size={24} />
                  <Nav.Link href="#action1" className="p-0">
                    Home
                  </Nav.Link>
                </Link>
                <Link to="/" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <PeopleFill size={24} />
                  <Nav.Link href="#action2" className="p-0">
                    Rete
                  </Nav.Link>
                </Link>
                <Link to="/jobs" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <SuitcaseLgFill size={24} />
                  <Nav.Link href="#action3" className="p-0">
                    Lavoro
                  </Nav.Link>
                </Link>
                <Link to="/" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <ChatDotsFill size={24} />
                  <Nav.Link href="#action4" className="p-0">
                    Messaggistica
                  </Nav.Link>
                </Link>
                <Link to="/" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <BellFill size={24} />
                  <Nav.Link href="#action5" className="p-0">
                    Notifiche
                  </Nav.Link>
                </Link>

                {/* immagina dinamica profilo */}
                <div className="d-flex flex-column align-items-center">
                  <Row className="justify-content-start">
                    <Col xs="auto">
                      <Dropdown>
                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                          <div style={{ display: "flex", alignItems: "center" }}>
                            {userInfo && (
                              <Image
                                style={{
                                  height: "24px",
                                  width: "24px",
                                  objectFit: "cover"
                                }}
                                roundedCircle
                                src={userInfo.image}
                              />
                            )}
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: "300px" }}>
                          {/* parte dinamica */}
                          <div className="p-3 border-bottom d-flex align-items-center">
                            {userInfo && (
                              <>
                                <Image
                                  style={{
                                    height: "50px",
                                    width: "50px",
                                    objectFit: "cover",
                                    marginRight: "10px"
                                  }}
                                  roundedCircle
                                  src={userInfo.image}
                                />
                                <div>
                                  <h6 className="mb-1">{userInfo.name}</h6>
                                  <small className="text-muted">{userInfo.title}</small>
                                </div>
                              </>
                            )}
                          </div>

                          {/* bottone x profilo */}
                          <div className="px-3 py-2">
                            <Link to={"/profile"}>
                              <Button
                                variant="outline-primary"
                                className="w-100"
                                onClick={() => {
                                  dispatch(fetchProfile("me"));
                                }}
                              >
                                Visualizza profilo
                              </Button>
                            </Link>
                          </div>

                          <div className="px-3 py-2 border-bottom">
                            <h6 className="text-muted px-3">ACCOUNT</h6>

                            <Dropdown.Item href="#">Impostazioni e privacy</Dropdown.Item>
                            <Dropdown.Item href="#">Guida</Dropdown.Item>
                            <Dropdown.Item href="#">Lingua</Dropdown.Item>
                          </div>

                          <div className="px-3 py-2 border-bottom">
                            <h6 className="text-muted  px-3">GESTISCI</h6>
                            <Dropdown.Item href="#">Post e attività</Dropdown.Item>
                            <Dropdown.Item href="#">Account per la pubblicazione di off...</Dropdown.Item>
                          </div>

                          <div className="px-3 py-2">
                            <Dropdown.Item href="#">Esci</Dropdown.Item>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </div>
                {/* linea verticle */}
                <div
                  className="mx-3"
                  style={{
                    width: "1px",
                    height: "60px",
                    backgroundColor: "#ccc"
                  }}
                ></div>
                {/* Grid Icon */}
                <Col xs="auto" className="d-flex align-items-center mt-2">
                  <div className="d-flex flex-column align-items-center">
                    <Grid3x3GapFill size={24} />
                    <NavDropdown title="Per le aziende" id="navbarScrollingDropdown" align="end">
                      <div style={{ width: "700px", padding: "10px" }}>
                        <Row>
                          {/* Colonna sinistra */}
                          <Col className="border-end border-2 border-gray p-2 ">
                            <h4 className="fw-bold p-4">Le mie app</h4>
                            <ul className="list-unstyled ps-4">
                              <li className="py-2">
                                <BsCompass size={24} className="me-2" /> Trova nuovi clienti
                              </li>
                              <li className="py-2">
                                <PersonLinesFill size={24} className="me-2" /> Gruppi
                              </li>
                              <h6 className="text-muted pt-4 py-2"> Talent</h6>
                              <li className="py-2">
                                <BarChartFill size={24} className="me-2" />
                                Talent Insights
                              </li>
                              <li className="py-2">
                                <PencilSquare size={24} className="me-2" />
                                Pubblica un’offerta di lavoro
                              </li>
                              <h6 className="text-muted pt-4 py-2"> Vendite</h6>
                              <li className="py-2">
                                <Shop size={24} className="me-2" />
                                Marketplace dei servizi
                              </li>
                              <h6 className="text-muted pt-4 py-2"> Marketing</h6>
                              <li className="py-2">
                                <MegaphoneFill size={24} className="me-2" />
                                Pubblicizza
                              </li>
                              <h6 className="text-muted pt-4 py-2"> Learning</h6>
                              <li className="py-2">
                                <BookFill size={24} className="me-2" />
                                Learning
                              </li>
                            </ul>
                          </Col>
                          {/* liunea vertiicale che fa come gli pare */}

                          {/* Colonna destra */}
                          <Col className="px-4">
                            <h4 className="fw-bold  pb-2 pt-3">Scopri altro per il business</h4>
                            <ul className="list-unstyled">
                              <li className="pt-2">
                                {" "}
                                <h5>Assumi su LinkedIn</h5>
                              </li>
                              <p className="text-muted">Trova,attrai e assumi </p>
                              <li className="pt-2">
                                <h5>Vendi con LinkedIn</h5>
                              </li>
                              <p className="text-muted">Sblocca nuova opportunita di vendita </p>

                              <li className="pt-2">
                                <h5>Offerta di lavoro gratuita</h5>
                              </li>
                              <p className="text-muted">Ottieni rapidamente candidati qualificati </p>
                              <li className="pt-2">
                                <h5>Fai pubblicità su LinkedIn</h5>
                              </li>
                              <p className="text-muted">Acquisisci clienti e fai crescere la tua azienda </p>

                              <li className="pt-2">
                                <h5>Inizia con Premium</h5>
                              </li>
                              <p className="text-muted">Amplia e sfrutta la tua rete </p>

                              <li className="pt-2">
                                <h5>Impara con LinkedIn</h5>
                              </li>
                              <p className="text-muted">Corsi per formare i tuoi dipendenti </p>

                              <li className="pt-2">
                                <h5>Admin Center</h5>
                              </li>
                              <p className="text-muted">Gestisci i dettagli di fatturazione e account</p>

                              <li className="fw-bold text-muted pt-2">
                                <h5>+ Crea una pagina aziendale</h5>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </NavDropdown>
                  </div>
                </Col>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
