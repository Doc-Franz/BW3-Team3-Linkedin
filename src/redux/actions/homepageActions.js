import { tokenAPI } from "../../assets/js/token";

export const FILL_HOMEPAGE = "FILL_HOMEPAGE";
export const ADD_POST_HOMEPAGE = "ADD_POST_HOMEPAGE";

// azione che controlla il riempimento dell'homepage con i post
export const fillHomepage = (cardsHomepage) => ({ type: FILL_HOMEPAGE, payload: cardsHomepage });
export const addPostHomepage = (newPost) => ({
  type: ADD_POST_HOMEPAGE,
  payload: newPost
});

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

// Funzione per creare un nuovo post
export const createPost = (bodyPost) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization: tokenAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyPost)
      });

      if (response.ok) {
        const createdPost = await response.json();
        dispatch(addPostHomepage(createdPost));
        dispatch(fetchHomepage());
        return createdPost._id;
      } else {
        console.error("Errore nella creazione del post");
        return null;
      }
    } catch (error) {
      console.error("Errore durante la fetch di createPost:", error);
      return null;
    }
  };
};

// Funzione per caricare un'immagine al post
export const uploadPostImage = (postId, imageFile) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("post", imageFile);

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "POST",
        headers: {
          Authorization: tokenAPI
        },
        body: formData
      });

      if (response.ok) {
        console.log("Immagine caricata con successo");
        dispatch(fetchHomepage());
      } else {
        console.error("Errore durante il caricamento dell'immagine");
      }
    } catch (error) {
      console.error("Errore durante la fetch di uploadPostImage:", error);
    }
  };
};

// Fetch di Modifica Post
export const updatePost = (postId, updatedPost) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          Authorization: tokenAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
      });

      if (response.ok) {
        console.log("Post aggiornato con successo");
        dispatch(fetchHomepage());
      } else {
        console.error("Errore durante l'aggiornamento del post:", await response.text());
      }
    } catch (error) {
      console.error("Errore nella fetch di updatePost:", error);
    }
  };
};

// Fetch di Cancellazione Post
export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "DELETE",
        headers: { Authorization: tokenAPI }
      });

      if (response.ok) {
        console.log("Post eliminato con successo");
        dispatch(fetchHomepage());
      } else {
        console.error("Errore durante l'eliminazione del post:", await response.text());
      }
    } catch (error) {
      console.error("Errore nella fetch di deletePost:", error);
    }
  };
};
