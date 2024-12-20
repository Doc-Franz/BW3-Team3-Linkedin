import { Row, Col, Card, Button } from "react-bootstrap";

const CompetenzeCard = ({ jobTitle }) => {
  return (
    <Row>
      <Col md={12}>
        <Card.Subtitle className="mt-4 pb-2" style={{ borderBottom: "1px solid lightgrey" }}>
          {jobTitle}
        </Card.Subtitle>
      </Col>
    </Row>
  );
};

const Competence = (props) => {
  const competences = [
    {
      jobTitle: "Spirito di Squadra"
    },
    {
      jobTitle: "Lingua Inglese"
    }
  ];

  return (
    <>
      <Card className="my-3">
        <Card.Body className="pb-0">
          <div className="d-flex align-items-center">
            <h3 className="me-auto">Competenze</h3>
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
          {competences.map((competenze, index) => (
            <CompetenzeCard key={index} jobTitle={competenze.jobTitle} />
          ))}
        </Card.Body>
        <Button className="text-center btnExp btnShowExp rounded w-100 pb-2" variant="transparent">
          Mostra tutte le competenze (6){" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </Button>
      </Card>
    </>
  );
};

export default Competence;
