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
export const updateExperience = (userId, expId, updatedData, imageFile) => {
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

      if (!response.ok) {
        console.error("Errore durante l'aggiornamento dell'esperienza");
        return;
      }

      if (imageFile) {
        const formData = new FormData();
        formData.append("experience", imageFile);

        const imageResponse = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`, {
          method: "POST",
          headers: { Authorization: tokenAPI },
          body: formData
        });

        if (!imageResponse.ok) {
          console.error("Errore durante il caricamento dell'immagine");
        }
      }

      dispatch(fetchExperiences(userId));
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
export const addExperience = (userId, newExperience, imageFile) => {
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

      if (!response.ok) {
        console.error("Errore durante l'inserimento della nuova esperienza");
        return;
      }

      const createdExperience = await response.json();
      const expId = createdExperience._id;

      if (imageFile) {
        const formData = new FormData();
        formData.append("experience", imageFile);

        const imageResponse = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`, {
          method: "POST",
          headers: { Authorization: tokenAPI },
          body: formData
        });

        if (!imageResponse.ok) {
          console.error("Errore durante il caricamento dell'immagine");
        }
      }

      dispatch(fetchExperiences(userId));
    } catch (error) {
      console.error("Errore nella richiesta POST:", error);
    }
  };
};
