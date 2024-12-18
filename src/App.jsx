import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";

import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBarLeft from "./components/SideBarLeft";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Container>
        <Row>
          <Col>
            {" "}
            <SideBarLeft />
          </Col>
          <Footer />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
