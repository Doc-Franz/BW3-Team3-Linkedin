import { Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { CameraFill, Pencil, ShieldCheck, X } from "react-bootstrap-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateProfile, uploadProfileImage } from "../redux/actions/profileActions";

const Hero = (props) => {
  const dispatch = useDispatch();

  // settings dello slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  // stato che gestisce il modal
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({});

  // funzione che gestisce lo stato del modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // selector per riempire i dati dello user
  const userInfo = useSelector((state) => state.hero.content);
  const experiences = useSelector((state) => state.experience.experiences);

  const handleEdit = () => {
    setFormData({
      name: userInfo.name,
      surname: userInfo.surname,
      title: userInfo.title,
      area: userInfo.area
    });
    handleShow();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSave = async () => {
    if (!userInfo?._id) {
      alert("Errore: ID utente non trovato!");
      return;
    }

    const profileData = {
      name: formData.name,
      surname: formData.surname,
      title: formData.title,
      area: formData.area
    };

    console.log(profileData);
    console.log(selectedFile);
    dispatch(updateProfile(profileData));
    dispatch(uploadProfileImage(userInfo._id, selectedFile));
    handleClose();
  };

  return (
    <>
      {userInfo && (
        <Container className="pb-4 rounded" style={{ backgroundColor: "white" }}>
          {/* modal per modificare le info del profile */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modifica Presentazione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nome*</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name || ""} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Cognome*</Form.Label>
                  <Form.Control type="text" name="surname" value={formData.surname || ""} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Sommario*</Form.Label>
                  <Form.Control type="text" name="title" value={formData.title || ""} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Città*</Form.Label>
                  <Form.Control type="text" name="area" value={formData.area || ""} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Carica Immagine</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSave}>
                Salva
              </Button>
            </Modal.Footer>
          </Modal>

          <Row
            className="mt-3"
            style={{
              backgroundImage: `url("https://thingscareerrelated.com/wp-content/uploads/2021/10/default-background-image.png?w=862")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
              position: "relative"
            }}
          >
            <Image
              className="p-0 rounded-circle border border-4 border-white"
              src={userInfo.image}
              style={{
                width: "150px",
                height: "150px",
                position: "absolute",
                left: "30px",
                top: "90px",
                cursor: "pointer"
              }}
            />

            <Col className="d-flex justify-content-end mt-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  cursor: "pointer"
                }}
              >
                <CameraFill style={{ width: "20px", height: "20px" }} />
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-end">
              {/* all'onclick della pencil si apre il modal per gestire le info dello user  */}
              {props.flag && <Pencil style={{ width: "25px", height: "25px", cursor: "pointer" }} onClick={handleEdit} />}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex flex-column col-8">
              <Row>
                <Col className="fs-2 align-items-center fw-semibold">
                  {" "}
                  {userInfo.name} {userInfo.surname}
                </Col>
                <Col className="d-flex align-items-center">
                  <Button variant="outline-primary" className="rounded-pill" style={{ borderStyle: "dashed" }}>
                    <ShieldCheck className="me-2" /> Aggiungi badge di verifica
                  </Button>
                </Col>
              </Row>
              <Row className="d-flex flex-column">
                {" "}
                <Col className="fs-5 mb-1">{userInfo.title}</Col>
                <Col className="text-secondary mb-1">
                  {userInfo.area} •{" "}
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    Informazioni di contatto
                  </span>{" "}
                </Col>
                <Col className="mb-1">
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    260 collegamenti
                  </span>{" "}
                </Col>
              </Row>
            </Col>
            <Col className="d-flex flex-column">
              {experiences.length > 0 &&
                experiences.slice(0, 2).map((exp) => (
                  <Row className="d-flex mb-2 align-items-center" key={exp._id}>
                    <Col className="d-flex justify-content-end">
                      <Image src={exp.image} style={{ width: "40px", height: "40px" }} />
                    </Col>
                    <Col>
                      <p className="fs-5 fw-semibold">{exp.company}</p>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
          <Row className="d-flex">
            <Col>
              <Button variant="primary" className="rounded-pill mt-2 me-2 px-3">
                Disponibili per
              </Button>
              <Button variant="outline-primary" className="rounded-pill mt-2 me-2 px-3">
                Aggiungi sezione del profilo
              </Button>
              <Button variant="outline-primary" className="rounded-pill mt-2 me-2 px-3">
                Migliora profilo
              </Button>
              <Button variant="outline-secondary" className="rounded-pill mt-2 px-3">
                Risorse
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Slider {...settings}>
              <Row className="slider-card mx-0 border border-light-subtle rounded p-2 d-flex">
                <Col className="d-flex flex-column ">
                  <p className="mb-0">
                    <span className="fw-bold">Mostra ai recruiter che sei disponibile a lavorare:</span> sei tu a decidere chi può vedere questa informazione
                  </p>
                  <p className="text-primary" style={{ cursor: "pointer" }}>
                    Inizia
                  </p>
                </Col>
                <Col className="col-1">
                  <X className="fs-3" style={{ cursor: "pointer" }} />
                </Col>
              </Row>
              <Row className="slider-card mx-0 border border-light-subtle rounded p-2 d-flex">
                <Col className="d-flex flex-column ">
                  <p className="mb-0">
                    <span className="fw-bold">Fai sapere che stai facendo selezione</span> e attrai candidati qualificati.
                  </p>
                  <p className="text-primary" style={{ cursor: "pointer" }}>
                    Inizia
                  </p>
                </Col>
                <Col className="col-1">
                  <X className="fs-3" style={{ cursor: "pointer" }} />
                </Col>
              </Row>
              <Row className="slider-card mx-0 border border-light-subtle rounded p-2 d-flex">
                <Col className="d-flex flex-column ">
                  <p className="mb-0">
                    <span className="fw-bold">Metti in risalto i tuoi servizi</span> in un&apos;apposita sezione sul tuo profilo, così sarà più facile trovarti.
                  </p>
                  <p className="text-primary" style={{ cursor: "pointer" }}>
                    Inizia
                  </p>
                </Col>
                <Col className="col-1">
                  <X className="fs-3" style={{ cursor: "pointer" }} />
                </Col>
              </Row>
            </Slider>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Hero;
