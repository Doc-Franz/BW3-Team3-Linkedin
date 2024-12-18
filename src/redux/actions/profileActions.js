import { tokenAPI } from "../../assets/js/token";
export const FILL_PROFILE_HERO = "FILL_PROFILE_HERO"; // azione che riempie l'hero con le informazioni di base
export const UPDATE_PROFILE_HERO = "UPDATE_PROFILE_HERO"; // azione che aggiorna l'hero con nuove informazioni

export const fillProfileHero = (userInfo) => ({ type: FILL_PROFILE_HERO, payload: userInfo });
export const updateProfileHero = (updatedUserInfo) => ({ type: UPDATE_PROFILE_HERO, payload: updatedUserInfo });

// fetch GET per riempire la sezione hero con i dati dello user
export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: { Authorization: tokenAPI }
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(fillProfileHero(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// fetch PUT per aggiornare la sezione dell'hero
export const updateProfile = (updatedInfo) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
        method: "PUT",
        headers: { Authorization: tokenAPI, "Content-Type": "application/json" },
        body: JSON.stringify(updatedInfo)
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(updateProfileHero(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
