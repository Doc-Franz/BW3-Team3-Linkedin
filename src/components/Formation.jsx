import { Row, Col, Card, Image, Button } from "react-bootstrap";

const FormazioneCard = ({ jobTitle, period, location }) => {
  return (
    <Row style={{ borderBottom: "1px solid lightgrey" }}>
      <Col md={1} className="mt-2">
        <Image
          width="48"
          src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1742428800&amp;v=beta&amp;t=1545nc7H976MH9PquSOoKQx-4ziZtAD1DU3H-k2vuig"
          loading="lazy"
          height="48"
          alt="Logo di EPICODE"
          id="ember1993"
          className="ivm-view-attr__img--centered EntityPhoto-square-3 evi-image lazy-image ember-view"
        />
      </Col>
      <Col md={11} className="mt-2">
        <Card.Title>{jobTitle}</Card.Title>
        <Card.Text className="mb-0" style={{ color: "#666666" }}>
          {period}
        </Card.Text>
        <Card.Text style={{ color: "#666666" }}>{location}</Card.Text>
      </Col>
    </Row>
  );
};

const Formations = (props) => {
  const formazioni = [
    {
      jobTitle: "Front-End Developer",
      period: "Giugno 2018 - Dicembre 2019 · 1 anno",
      location: "Torino - Italia"
    },
    {
      jobTitle: "Junior Developer",
      period: "Gennaio 2017 - Maggio 2018 · 1 anno",
      location: "Milano - Italia"
    }
  ];

  return (
    <>
      <Card className="my-3">
        <Card.Body className="pb-0">
          <div className="d-flex align-items-center">
            <h3 className="me-auto">Formazione</h3>
            {props.flag && (
              <>
                <Button className="btnExp rounded-circle" variant="transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                  </svg>
                </Button>
                <Button className="btnExp rounded-circle" variant="transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </Button>
              </>
            )}
          </div>
          {formazioni.map((formazione, index) => (
            <FormazioneCard
              key={index}
              jobTitle={formazione.jobTitle}
              company={formazione.company}
              period={formazione.period}
              location={formazione.location}
              description={formazione.description}
            />
          ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default Formations;
