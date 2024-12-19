import Competence from "./Competence";
import Experience from "./Experience";
import Formations from "./Formation";
import Interest from "./Interest";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import SideBarRight from "./SideBarRight";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { tokenAPI } from "../assets/js/token";

const ProfilePage = () => {
  const { id } = useParams(); // Ottieni l'ID dall'URL

  const [profileData, setProfileData] = useState(null);

  const [setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: tokenAPI,
              contentType: "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          setError("Error fetching results");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setError("Error fetching results");
      }
    };

    fetchProfile();
  }, [id, setError]);

  return (
    <Container>
      <Row>
        <Col md={9}>
          {/* Passa i dati del profilo ai sottocomponenti */}
          <Hero profileData={profileData} />
          <Dashboard profileData={profileData} />
          <Experience profileData={profileData} />
          <Formations profileData={profileData} />
          <Competence profileData={profileData} />
          <Interest profileData={profileData} />
        </Col>
        <Col md={3}>
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
