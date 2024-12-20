import { useState } from "react";
import { Card, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost, uploadPostImage } from "../redux/actions/homepageActions";

function CardPost() {
  const userInfo = useSelector((state) => state.hero.content);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue && !selectedFile) {
      alert("Inserisci un testo o seleziona un file");
      return;
    }

    try {
      const postBody = { text: inputValue };
      // Prima chiamata per creare il post con il testo
      const createdPostId = await dispatch(createPost(postBody));

      // Nel caso ci fosse anche un immagine da inserire
      if (selectedFile && createdPostId) {
        const imageFormData = new FormData();
        imageFormData.append("post", selectedFile);

        await dispatch(uploadPostImage(createdPostId, selectedFile));
      }

      // Ripuliamo i campi dopo aver fatto le chiamate API
      setInputValue("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Errore durante la creazione del post:", error);
    }
  };

  return (
    <Card className="my-3 shadow-sm">
      <Row className="align-items-center justify-content-left m-2 mt-3">
        {/* Sezione Avatar */}
        <Col xs="auto">
          {userInfo && <Image style={{ height: "70px", width: "70px", objectFit: "cover", border: "2px solid white" }} roundedCircle src={userInfo.image} />}
        </Col>

        {/* Input per "Crea un post" */}
        <Col xs={10} className="p-0">
          <Card.Body className="d-flex justify-content-center p-0">
            <Card.Text className="w-100">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="Crea un post"
                  className="form-control"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  style={{
                    borderRadius: "50px",
                    border: "1px solid #ddd",
                    padding: "8px 16px"
                  }}
                />
              </Form>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

      {/* Opzioni Contenuti */}
      <Row className="text-center mt-3">
        <Col className="d-flex ">
          <Form.Label
            className="btn btn-light text-black fw-bold text-decoration-none ms-2"
            style={{
              backgroundColor: "white"
            }}
          >
            <i className="bi bi-image text-primary me-1"></i> Contenuti multimediali
            <Form.Control type="file" style={{ display: "none" }} onChange={handleFileChange} />
          </Form.Label>
        </Col>
        <Col>
          <Button className="btn btn-light text-black fw-bold text-decoration-none" style={{ backgroundColor: "white" }}>
            <i className="bi bi-calendar3 cuadro"></i> Evento
          </Button>
        </Col>
        <Col>
          <Button className="btn btn-light text-black fw-bold text-decoration-none" style={{ backgroundColor: "white" }}>
            <i className="bi bi-layout-text-window-reverse cuadro"></i> Scrivi un articolo
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default CardPost;
