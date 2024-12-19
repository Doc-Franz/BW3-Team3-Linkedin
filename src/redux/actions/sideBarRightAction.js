import { tokenAPI } from "../../assets/js/token";
export const FILL_PROFILE_ASIDE = "FILL_PROFILE_ASIDE"; // azione che riempie l'hero con le informazioni di base
export const UPDATE_PROFILE_ASIDE = "UPDATE_PROFILE_ASIDE"; // azione che aggiorna l'hero con nuove informazioni
// azione che cancella l'hero

export const fillProfileAside = (userInfo) => ({
  type: FILL_PROFILE_ASIDE,
  payload: userInfo,
});
export const updateProfileAside = (updatedUserInfo) => ({
  type: UPDATE_PROFILE_ASIDE,
  payload: updatedUserInfo,
});

// fetch per riempire la sezione hero con i dati dello user
export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: { Authorization: tokenAPI },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(fillProfileAside(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// fetch per aggiornare la sezione dell'hero
export const updateProfile = (updatedInfo) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
          method: "PUT",
          headers: {
            Authorization: tokenAPI,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedInfo),
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(updateProfileAside(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
