import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { CameraFill, Pencil, ShieldCheck, X } from "react-bootstrap-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  const userInfo = useSelector((state) => state.hero.content);
  const userExperiences = useSelector((state) => state.experience.experiences);

  return (
    <>
      {userInfo && (
        <Container className="pb-4 rounded" style={{ backgroundColor: "white" }}>
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
              style={{ width: "150px", height: "150px", position: "absolute", left: "30px", top: "90px", cursor: "pointer" }}
            />

            <Col className="d-flex justify-content-end mt-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "40px", height: "40px", backgroundColor: "white", cursor: "pointer" }}
              >
                <CameraFill style={{ width: "20px", height: "20px" }} />
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-end">
              <Pencil style={{ width: "25px", height: "25px", cursor: "pointer" }} />
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
              <Row className="d-flex mb-2 align-items-center">
                <Col className="d-flex justify-content-end">
                  {" "}
                  <Image src={userExperiences[0].image} style={{ width: "40px", height: "40px" }} />
                </Col>
                <Col>
                  {" "}
                  <p className="fs-5 fw-semibold">{userExperiences[0].company}</p>
                </Col>
              </Row>
              <Row className="d-flex mb-2 align-items-center ">
                <Col className="d-flex justify-content-end">
                  {" "}
                  <Image src={userExperiences[1].image} style={{ width: "40px", height: "40px" }} />
                </Col>
                <Col>
                  {" "}
                  <p className="fs-5 fw-semibold">{userExperiences[1].company}</p>
                </Col>
              </Row>
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
