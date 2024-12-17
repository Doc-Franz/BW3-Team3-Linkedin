import { tokenAPI } from "../../assets/js/token";
import { SET_EXPERIENCES } from "../reducers/experienceReducer";

export const fetchExperiences = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6551e7bbc55e7e0018f83bfb/experiences", {
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
