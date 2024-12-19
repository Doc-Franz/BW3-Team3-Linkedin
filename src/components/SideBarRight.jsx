import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap-icons";

function SideBarRight() {
  const Persone = [
    {
      name: "Luca Brancato",
      lavoro: "Software Developer @ FairConnect",
      imgUrl: "https://via.placeholder.com/40"
    },
    {
      name: "Carla Cristina Forte",
      lavoro: "Back-end Developer Junior",
      imgUrl: "https://via.placeholder.com/40"
    },
    {
      name: "Stefano Pirrera",
      lavoro: "Cybersecurity Specialist",
      imgUrl: "https://via.placeholder.com/40"
    },
    {
      name: "Valerio Lofoco",
      lavoro: "Finanza Agevolata",
      imgUrl: "https://via.placeholder.com/40"
    },
    {
      name: "Silvia Pietrini",
      lavoro: "Security Analyst",
      imgUrl: "https://via.placeholder.com/40"
    }
  ];
  return (
    <>
      <Card style={{ width: "300px" }} className="shadow-sm mt-3">
        <Card.Body>
          <Card.Title className="list-group-item d-flex justify-content-between align-items-center">
            Lingua del profilo{" "}
            <span className="badge text-black">
              <i className="bi bi-pencil"></i>
            </span>
          </Card.Title>
          <Card.Text>Italiano</Card.Text>
          <hr />
          <Card.Title className="list-group-item d-flex justify-content-between align-items-center">
            Profilo pubblico e URL{" "}
            <span className="badge text-black">
              <i className="bi bi-pencil"></i>
            </span>
          </Card.Title>
          <Card.Text>
            <a href="https://www.linkedin.com" target="_blank">
              linkedin.com/in/username
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "300px" }} className="shadow-sm">
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title className="list-group-item d-flex justify-content-between align-items-center">
              <Card.Title>
                Persone che potresti conoscere <br />
                <small className="text-muted"> Dalla tua scuola o università</small>
              </Card.Title>
            </Card.Title>

            <ListGroup variant="flush">
              {Persone.map((persone, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center">
                  <Image
                    src={persone.imgUrl}
                    roundedCircle
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "12px"
                    }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-bold">{persone.name}</div>
                    <small className="text-muted">{persone.lavoro}</small> <br />
                    <Button size="sm" variant="primary">
                      Collegati
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>

          <Button className="btn-light m-0 rounded-0">Mostra tutto</Button>
        </Card>
      </Card>
    </>
  );
}

export default SideBarRight;
