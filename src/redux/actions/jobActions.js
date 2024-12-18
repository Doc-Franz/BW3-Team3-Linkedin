import { tokenAPI } from "../../assets/js/token";

export const SEARCH_JOB = "SEARCH_JOB"; // azione per ricercare un job dalla barra di search

export const searchJob = (job) => ({ type: SEARCH_JOB, payload: job });

// fetch GET per cercare un job dalla barra del search
export const searchNewJob = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
        headers: { Authorization: tokenAPI }
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(searchJob(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
