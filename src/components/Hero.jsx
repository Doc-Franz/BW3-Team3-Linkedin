import { Button, Col, Image, Row } from "react-bootstrap";
import { CameraFill, Pencil, ShieldCheck } from "react-bootstrap-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <>
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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
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
            <Col className="fs-2 align-items-center fw-semibold">Name Surname</Col>
            <Col className="d-flex align-items-center">
              <Button variant="outline-primary" className="rounded-pill" style={{ borderStyle: "dashed" }}>
                <ShieldCheck className="me-2" /> Aggiungi badge di verifica
              </Button>
            </Col>
          </Row>
          <Row className="d-flex flex-column">
            {" "}
            <Col className="fs-5 mb-1">Profession</Col>
            <Col className="text-secondary mb-1">
              Legnano, Lombardia, Italia •{" "}
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
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "40px", height: "40px" }}
              />
            </Col>
            <Col>
              {" "}
              <p className="fs-5 fw-semibold">Company 1</p>
            </Col>
          </Row>
          <Row className="d-flex mb-2 align-items-center ">
            <Col className="d-flex justify-content-end">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "40px", height: "40px" }}
              />
            </Col>
            <Col>
              {" "}
              <p className="fs-5 fw-semibold">Company 2</p>
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
          <Row className="mx-0">
            <Col className="d-flex flex-column border border-light-subtle rounded p-2" style={{ width: "95%", height: "100px" }}>
              <p className="mb-0">
                <span className="fw-bold">Mostra ai recruiter che sei disponibile a lavorare:</span> sei tu a decidere chi può vedere questa informazione
              </p>
              <p className="text-primary" style={{ cursor: "pointer" }}>
                Inizia
              </p>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col className="d-flex flex-column border border-light-subtle rounded p-2" style={{ width: "95%", height: "100px" }}>
              <p className="mb-0">
                <span className="fw-bold">Fai sapere che stai facendo selezione</span> e attrai candidati qualificati.
              </p>
              <p className="text-primary" style={{ cursor: "pointer" }}>
                Inizia
              </p>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col className="d-flex flex-column border border-light-subtle rounded" style={{ width: "95%", height: "100px" }}>
              <p className="mb-0">
                <span className="fw-bold">Metti in risalto i tuoi servizi</span> in un&apos;apposita sezione sul tuo profilo, così sarà più facile trovarti.
              </p>
              <p className="text-primary" style={{ cursor: "pointer" }}>
                Inizia
              </p>
            </Col>
          </Row>
        </Slider>
      </Row>
    </>
  );
};

export default Hero;
