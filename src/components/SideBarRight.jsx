import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { tokenAPI } from "../assets/js/token"; // Assicurati che il token sia corretto
import { Link } from "react-router-dom";

function SideBarRight() {
  const [userInfo, setPersone] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Gestisci il caricamento
  const [error, setError] = useState(null); // Gestisci gli errori

  useEffect(() => {
    const fetchPersone = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
          method: "GET",
          headers: {
            Authorization: tokenAPI // Aggiungi "Bearer" se necessario
          }
        });

        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }

        const data = await response.json();

        // Verifica se la struttura dei dati è corretta
        console.log(data); // Debug per vedere la struttura dell'API

        // Randomizza i profili ricevuti
        const shuffledData = data.sort(() => Math.random() - 0.5);
        setPersone(shuffledData.slice(0, 15)); // Prendi solo i primi 15 profili
      } catch (error) {
        setError(error.message); // Gestisci l'errore
      } finally {
        setIsLoading(false); // Caricamento completato
      }
    };

    fetchPersone();
  }, []); // Passa un array vuoto per eseguire solo al primo render

  if (isLoading) {
    return <p>Caricamento in corso...</p>; // Mostra il caricamento
  }

  if (error) {
    return <p>Errore: {error}</p>; // Mostra eventuali errori
  }

  return (
    <Card style={{ width: "300px" }} className="shadow-sm mt-3">
      <Card.Body>
        <Card.Title>
          Persone che potresti conoscere <br />
          <small className="text-muted">Dalla tua scuola o università</small>
        </Card.Title>
        <ListGroup variant="flush">
          {userInfo.length > 0 ? (
            userInfo.map((userInfo, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center">
                <Image
                  src={userInfo.image} // Assicurati che la risposta contenga `persona.image`
                  roundedCircle
                  alt={userInfo.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "12px"
                  }}
                />
                <div className="flex-grow-1">
                  <div className="fw-bold">
                    <Link className="text-decoration-none" to={`/profile/${userInfo._id}`}>
                      <span aria-hidden="false">
                        {" "}
                        {userInfo.name} {userInfo.surname}
                      </span>
                    </Link>
                  </div>
                  <small className="text-muted">{userInfo.title}</small> <br />
                  <Button className="text-black bg-white border-dark collegati rounded-pill fw-bold" size="sm">
                    <i className=" text-black  bi bi-person-fill-add"></i> Collegati
                  </Button>
                </div>
              </ListGroup.Item>
            ))
          ) : (
            <p>Nessuna persona trovata</p>
          )}
        </ListGroup>
      </Card.Body>
      <Button className="btn-light m-0 rounded-0">Mostra tutto</Button>
    </Card>
  );
}

export default SideBarRight;
