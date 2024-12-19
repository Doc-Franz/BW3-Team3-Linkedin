import { tokenAPI } from "../../assets/js/token";

export const FILL_JOBS = "FILL_JOBS";
export const FILL_JOBS_MORE_CHANCE = "FILL_JOBS_MORE_CHANCE";

export const fillJobs = (job) => ({ type: FILL_JOBS, payload: job });
export const fillJobsMoreChance = (job) => ({ type: FILL_JOBS_MORE_CHANCE, payload: job });

// fetch GET che si attiva al caricamento della pagina Jobs "Le principali offerte di lavoro"
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

// fetch GET che si attiva al caricamento della pagina Jobs "Offerte di lavoro per cui hai più chance"
export const fillJobsMoreChancePage = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query, {
        headers: { Authorization: tokenAPI }
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(fillJobsMoreChance(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
