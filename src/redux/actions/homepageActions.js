import { tokenAPI } from "../../assets/js/token";

export const FILL_HOMEPAGE = "FILL_HOMEPAGE";

// azione che controlla il riempimento dell'homepage con i post
export const fillHomepage = (cardsHomepage) => ({ type: FILL_HOMEPAGE, payload: cardsHomepage });

// fetch per riempire la sezione homepage
export const fetchHomepage = () => {
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
