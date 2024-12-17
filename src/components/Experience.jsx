import { useState } from "react";
import { Row, Col, Card, Image, Button, Modal, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperiences } from "../redux/actions/experienceActions";
import { tokenAPI } from "../assets/js/token";

const EsperienzaCard = ({ exp, onEdit }) => {
  console.log(exp);
  return (
    <Row style={{ borderBottom: "1px solid lightgrey" }}>
      <Col md={1} className="mt-2">
        <Image
          width="48"
          height="48"
          src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1742428800&amp;v=beta&amp;t=1545nc7H976MH9PquSOoKQx-4ziZtAD1DU3H-k2vuig"
          alt={`Logo di ${exp.company}`}
          roundedCircle
        />
      </Col>
      <Col md={10} className="mt-2">
        <Card.Title>{exp.role}</Card.Title>
        <Card.Subtitle className="mb-2">{exp.company}</Card.Subtitle>
        <Card.Text className="mb-0" style={{ color: "#666666" }}>
          {new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text style={{ color: "#666666" }}>{exp.area}</Card.Text>
        <Card.Text>{exp.description}</Card.Text>
      </Col>
      <Col md={1} className="mt-2">
        <Button variant="transparent" onClick={() => onEdit(exp)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg>
        </Button>
      </Col>
    </Row>
  );
};

const Experience = () => {
  const experiences = useSelector((state) => state.experience.experiences);
  const [showModal, setShowModal] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (experience) => {
    console.log("Experience:", experience);
    setCurrentExperience(experience);
    setFormData({
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      area: experience.area,
      description: experience.description
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      console.log(currentExperience);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${currentExperience.user}/experiences/${currentExperience._id}`, {
        method: "PUT",
        headers: {
          Authorization: tokenAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        dispatch(fetchExperiences(currentExperience.user));
        setShowModal(false);
      } else {
        console.error("Errore durante il salvataggio dell'esperienza");
      }
    } catch (error) {
      console.error("Errore nella richiesta PUT:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${currentExperience.user}/experiences/${currentExperience._id}`, {
        method: "DELETE",
        headers: { Authorization: tokenAPI }
      });

      if (response.ok) {
        dispatch(fetchExperiences(currentExperience.user));
        setShowModal(false);
      } else {
        console.error("Errore durante l'eliminazione dell'esperienza");
      }
    } catch (error) {
      console.error("Errore nella richiesta DELETE:", error);
    }
  };

  return (
    <>
      <Card>
        <Card.Body className="pb-0">
          <div className="d-flex align-items-center mb-3">
            <h3 className="me-auto">Esperienza</h3>
            <Button className="btnExp rounded-circle" variant="transparent">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
              </svg>
            </Button>
          </div>

          {experiences.length > 0 && experiences.map((exp) => <EsperienzaCard key={exp._id} exp={exp} onEdit={handleEdit} />)}
        </Card.Body>
      </Card>

      {/* Modale per modificare le esperienze */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control type="text" name="role" value={formData.role || ""} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Azienda</Form.Label>
              <Form.Control type="text" name="company" value={formData.company || ""} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data inizio</Form.Label>
              <Form.Control type="date" name="startDate" value={formData.startDate || ""} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data fine</Form.Label>
              <Form.Control type="date" name="endDate" value={formData.endDate || ""} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" name="area" value={formData.area || ""} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={formData.description || ""} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Salva
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Elimina esperienza
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Experience;
