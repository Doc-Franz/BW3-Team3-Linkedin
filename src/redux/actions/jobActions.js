import { tokenAPI } from "../../assets/js/token";

export const FILL_JOBS = "FILL_JOBS"; // azione per ricercare un job dalla barra di search

export const fillJobs = (job) => ({ type: FILL_JOBS, payload: job });

// fetch GET che si attiva al caricamento della pagina Jobs
export const fillJobsPage = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
        headers: { Authorization: tokenAPI }
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(fillJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
