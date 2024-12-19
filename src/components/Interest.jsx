import { useState } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

const Interest = () => {
  const [selectedCategory, setSelectedCategory] = useState("aziende");
  const [followedItems, setFollowedItems] = useState([]);

  const carouselData = {
    aziende: [
      {
        logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
        title: "Google",
        subtitle: "126.762 follower",
        period: "2021 - presente",
        location: "California, USA",
        id: 1
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png",
        title: "Microsoft",
        subtitle: "98.123 follower",
        period: "2019 - 2022",
        location: "Redmond, USA",
        id: 2
      }
    ],
    scuole: [
      {
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_200_200/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1742428800&v=beta&t=TiKUrPLS9Hcc1h5N0em1DnUn54bzV-w-MWVZdwskq7Q",
        title: "EPICODE School",
        subtitle: "1234 follower",
        period: "2020 - 2023",
        location: "Rome, Italy",
        id: 3
      },
      {
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_200_200/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1742428800&v=beta&t=TiKUrPLS9Hcc1h5N0em1DnUn54bzV-w-MWVZdwskq7Q",
        title: "Tech University",
        subtitle: "4321 follower",
        period: "2018 - 2022",
        location: "San Francisco, USA",
        id: 4
      }
    ]
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleFollowToggle = (id) => {
    setFollowedItems((prevState) => (prevState.includes(id) ? prevState.filter((itemId) => itemId !== id) : [...prevState, id]));
  };

  return (
    <>
      <Card className="my-3">
        <Card.Body style={{ borderBottom: "1px solid lightgrey" }}>
          <Card.Title>Interessi</Card.Title>

          <div className="mb-3">
            <Button
              variant="link"
              className="mr-3"
              onClick={() => handleCategorySelect("aziende")}
              style={{
                textDecoration: "none",
                borderBottom: selectedCategory === "aziende" ? "4px solid green" : "none",
                color: selectedCategory === "aziende" ? "green" : "black"
              }}
            >
              Aziende
            </Button>
            <Button
              variant="link"
              onClick={() => handleCategorySelect("scuole")}
              style={{
                textDecoration: "none",
                borderBottom: selectedCategory === "scuole" ? "4px solid green" : "none",
                color: selectedCategory === "scuole" ? "green" : "black"
              }}
            >
              Scuole o università
            </Button>
          </div>

          <div className="mt-3">
            <Row className="d-flex">
              {carouselData[selectedCategory].map((item, index) => (
                <Col md={5} key={index} className="mb-3">
                  <Card style={{ border: "none" }}>
                    <Card.Body className="d-flex p-0 gap-3">
                      <img src={item.logo} alt={`Logo di ${item.title}`} width="48" height="48" style={{ borderRadius: "50%" }} />
                      <div>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2">{item.subtitle}</Card.Subtitle>
                        <Card.Text className="mb-0" style={{ color: "#666666" }}>
                          {item.period}
                        </Card.Text>
                        <Card.Text style={{ color: "#666666" }}>{item.location}</Card.Text>

                        <Button
                          style={{
                            color: "black",
                            backgroundColor: "white",
                            border: "1px solid black",
                            borderRadius: "50px",
                            padding: "5px 15px"
                          }}
                          className="rounded-pill"
                          onMouseOver={(e) => (e.target.style.borderWidth = "3px")}
                          onMouseOut={(e) => (e.target.style.borderWidth = "1px")}
                          onClick={() => handleFollowToggle(item.id)}
                        >
                          {followedItems.includes(item.id) ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                              </svg>
                              Già Segui
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                              </svg>
                              Segui
                            </>
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Card.Body>

        <Button className="text-center btnExp btnShowExp rounded w-100 pb-2" variant="transparent">
          Mostra tutte le {selectedCategory === "aziende" ? "aziende" : "scuole o università"} (6){" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </Button>
      </Card>
    </>
  );
};

export default Interest;
