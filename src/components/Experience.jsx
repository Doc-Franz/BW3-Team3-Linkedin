import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchExperiences } from "../redux/actions/experienceActions";

const EsperienzaCard = ({ role, company, startDate, endDate, description, area, image }) => {
  return (
    <Row style={{ borderBottom: "1px solid lightgrey" }}>
      <Col md={1} className="mt-2">
        <Image width="48" height="48" src={image} alt={`Logo di ${company}`} roundedCircle />
      </Col>
      <Col md={11} className="mt-2">
        <Card.Title>{role}</Card.Title>
        <Card.Subtitle className="mb-2">{company}</Card.Subtitle>
        <Card.Text className="mb-0" style={{ color: "#666666" }}>
          {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text style={{ color: "#666666" }}>{area}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Col>
    </Row>
  );
};

const Experience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.experiences);

  useEffect(() => {
    const getExperiences = async () => {
      const action = await fetchExperiences();
      dispatch(action);
    };

    getExperiences();
  }, [dispatch]);

  return (
    <Card>
      <Card.Body className="pb-0">
        <div className="d-flex align-items-center mb-3">
          <h3 className="me-auto">Esperienza</h3>
          <Button className="btnExp rounded-circle me-2" variant="transparent">
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

        {experiences.map((exp) => (
          <EsperienzaCard key={exp._id} {...exp} />
        ))}
        <Button className="text-center btnExp btnShowExp rounded w-100 pb-2" variant="transparent">
          Mostra tutte le esperienze (6)
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Experience;
