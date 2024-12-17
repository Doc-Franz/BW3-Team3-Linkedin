import { Container } from "react-bootstrap";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import { tokenAPI } from "../assets/js/token";

const Profile = () => {
  const [dataProfile, setDataProfile] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  //   Fetch al caricamento della pagina
  const fetchProfile = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: { Authorization: tokenAPI }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        setDataProfile(data);
      })
      .catch((err) => {
        console.log("errore nella chiamata", err);
      });
  };

  //   Al caricamento della pagina si effettua una chiamata che restituisce i dati di tutti i profili
  useEffect(() => {
    fetchProfile();
  }, []);

  //  Si aspetta il caricamento di tutti i dati dei profili per poi poter selezionare un profilo randomico attraverso randomProfile()
  useEffect(() => {
    randomProfile();
  }, [dataProfile]);

  // Funzione che imposta un profilo randomico al caricamento della pagina
  const randomProfile = () => {
    const randomIndex = Math.floor(Math.random() * dataProfile.length);
    setUserProfile(dataProfile[randomIndex]);
  };

  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Profile;
