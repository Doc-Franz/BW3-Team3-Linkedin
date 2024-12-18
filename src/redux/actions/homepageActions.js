import { tokenAPI } from "../../assets/js/token";

export const FILL_HOMEPAGE = "FILL_HOMEPAGE";

export const fillHomepage = (input) => ({ type: FILL_HOMEPAGE, payload: input });

// fetch per riempire la sezione homepage
export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: { Authorization: tokenAPI }
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(fillHomepage(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
