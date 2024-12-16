import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const EsperienzaCard = ({ jobTitle, company, period, location, description }) => {
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
        <Card.Subtitle className="mb-2">{company}</Card.Subtitle>
        <Card.Text className="mb-0" style={{ color: "#666666" }}>
          {period}
        </Card.Text>
        <Card.Text style={{ color: "#666666" }}>{location}</Card.Text>
        <Card.Text className="mb-2">
          <a className="links" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gem" viewBox="0 0 16 16">
              <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
            </svg>{" "}
            {description}
          </a>
        </Card.Text>
      </Col>
    </Row>
  );
};

const Experience = () => {
  const esperienze = [
    {
      jobTitle: "Software Engineer",
      company: "Acme Corp",
      period: "Gennaio 2020 - Presente · 4 anni",
      location: "",
      description: "Sviluppo di applicazioni web e gestione di team agili."
    },
    {
      jobTitle: "Front-End Developer",
      company: "Tech Solutions",
      period: "Giugno 2018 - Dicembre 2019 · 1 anno",
      location: "Torino - Italia",
      description: "Realizzazione di interfacce utente interattive e responsive."
    },
    {
      jobTitle: "Junior Developer",
      company: "Web Dev Ltd",
      period: "Gennaio 2017 - Maggio 2018 · 1 anno",
      location: "Milano - Italia",
      description: "Sviluppo di soluzioni software in ambiente JavaScript."
    }
  ];

  return (
    <Container>
      <Row>
        {/* Colonna principale per le esperienze */}
        <Col md={9}>
          <Card>
            <Card.Body className="pb-0">
              <div className="d-flex align-items-center">
                <h3 className="me-auto">Esperienza</h3>
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
              </div>
              {esperienze.map((esperienza, index) => (
                <EsperienzaCard
                  key={index}
                  jobTitle={esperienza.jobTitle}
                  company={esperienza.company}
                  period={esperienza.period}
                  location={esperienza.location}
                  description={esperienza.description}
                />
              ))}
            </Card.Body>
            <Button className="text-center btnExp btnShowExp rounded w-100 pb-2" variant="transparent">
              Mostra tutte le esperienze (6){" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Button>
          </Card>
        </Col>

        {/* Sidebar a destra --> Esempio per vedere lo spazio */}
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <h5>Sidebar</h5>
              <ul>
                <li>
                  <a href="#">Connessioni</a>
                </li>
                <li>
                  <a href="#">Gruppi</a>
                </li>
                <li>
                  <a href="#">Eventi</a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
