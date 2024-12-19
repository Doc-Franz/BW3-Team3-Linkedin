import { Card, Button, Row, Col } from "react-bootstrap";
import { BsEye, BsGraphUp, BsSearch, BsPencil, BsFileText, BsFillPeopleFill, BsArrowRight } from "react-icons/bs";

function Dashboard(props) {
  return (
    <>
      {/* Sezione Consigliato per te */}
      <Card className="mb-4 border-0 shadow-sm my-4">
        <Card.Body>
          <h4 className="mb-3">Consigliato per te</h4>
          <div className="d-flex align-items-center mb-3">
            <BsEye size={24} className="me-2 text-muted" />
            <span className="text-muted">Solo per te</span>
          </div>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <BsFileText size={24} className="me-2 text-dark" />
                <strong>Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</strong>
              </div>
              <p className="text-muted small mb-3">Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
              <Button variant="outline-secondary" className="rounded-pill">
                Aggiungi un riepilogo
              </Button>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>

      {/* Sezione Analisi */}
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body>
          <h4 className="mb-4">Analisi</h4>
          <div className="d-flex align-items-center mb-3">
            <BsEye size={24} className="me-2 text-muted" />
            <span className="text-muted">Solo per te</span>
          </div>
          <Row>
            <Col md={4} className="text-center mb-3">
              <BsFillPeopleFill />

              <strong className="mb-1">16 visualizzazioni del profilo</strong>
              <p className="text-muted small">Scopri chi ha visitato il tuo profilo.</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <div>
                <BsGraphUp size={28} className="mb-2 text-dark" />

                <strong className="mb-1">0 impressioni del post</strong>
              </div>
              <p className="text-muted small">
                Crea un post per aumentare l'interesse.
                <br />
                Ultimi 7 giorni
              </p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <div>
                <BsSearch size={20} className="mb-2 text-dark" />

                <strong className="mb-1">4 comparse nei motori di ricerca</strong>
              </div>
              <p className="text-muted small">Vedi quante volte compari nei risultati di ricerca.</p>
            </Col>
          </Row>
          <Button variant="link" className="w-100 p-0 mt-2 text-muted">
            Mostra tutte le analisi
            <BsArrowRight />
          </Button>
        </Card.Body>
      </Card>

      {/* Sezione Attività */}
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Attività</h4>
            {props.flag && (
              <>
                <div>
                  <Button variant="light" className="rounded-pill text-primary border border-primary me-2">
                    Crea un post
                  </Button>

                  <BsPencil className="me-1" />
                </div>
              </>
            )}
          </div>
          <p className="text-primary mb-1">261 follower</p>
          <strong className="text-muted mb-3">Non hai ancora pubblicato nulla</strong>
          <p className="text-muted small mb-3">I post che condividi appariranno qui.</p>
          <Button variant="link" className="w-100 p-0 text-muted">
            Mostra tutte le attività <BsArrowRight />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Dashboard;
