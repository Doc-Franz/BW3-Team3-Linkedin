import { tokenAPI } from "../../assets/js/token";
import { SET_EXPERIENCES } from "../reducers/experienceReducer";

// Fetch experiences (GET)
export const fetchExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: { Authorization: tokenAPI }
      });

      if (!response.ok) {
        throw new Error("Errore durante la fetch delle esperienze");
      }

      const data = await response.json();
      dispatch({
        type: SET_EXPERIENCES,
        payload: data
      });
    } catch (error) {
      console.error("Errore nella fetch:", error.message);
    }
  };
};

// Update experience (PUT)
export const updateExperience = (userId, expId, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
        method: "PUT",
        headers: {
          Authorization: tokenAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        console.error("Errore durante l'aggiornamento dell'esperienza");
      }
    } catch (error) {
      console.error("Errore nella richiesta PUT:", error);
    }
  };
};

// Delete experience (DELETE)
export const deleteExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
        method: "DELETE",
        headers: {
          Authorization: tokenAPI
        }
      });

      if (response.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        console.error("Errore durante l'eliminazione dell'esperienza");
      }
    } catch (error) {
      console.error("Errore nella richiesta DELETE:", error);
    }
  };
};

// Add experience (POST)
export const addExperience = (userId, newExperience) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization: tokenAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newExperience)
      });

      if (response.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        console.error("Errore durante l'inserimento della nuova esperienza");
      }
    } catch (error) {
      console.error("Errore nella richiesta POST:", error);
    }
  };
};
