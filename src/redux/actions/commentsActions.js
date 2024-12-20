import { setComments, addCommentAction, updateCommentAction, deleteCommentAction } from "../reducers/commentsReducer";
import { tokenAPI } from "../../assets/js/token";

// Recupera i commenti di un post
export const fetchComments = (postId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments?elementId=${postId}`, {
        headers: { Authorization: tokenAPI }
      });

      if (response.ok) {
        const comments = await response.json();
        dispatch(setComments(postId, comments));
      } else {
        console.error("Errore durante il recupero dei commenti:", await response.text());
      }
    } catch (error) {
      console.error("Errore nella fetch di fetchComments:", error);
    }
  };
};

// Aggiunge un commento
export const addComment = (postId, commentText) => {
  return async (dispatch) => {
    try {
      const commentData = {
        comment: commentText,
        rate: "5",
        elementId: postId
      };

      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          Authorization: tokenAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(commentData)
      });

      if (response.ok) {
        const newComment = await response.json();
        dispatch(addCommentAction(postId, newComment));
      } else {
        console.error("Errore durante l'aggiunta del commento:", await response.text());
      }
    } catch (error) {
      console.error("Errore nella fetch di addComment:", error);
    }
  };
};

// Modifica un commento
export const updateComment = (postId, commentId, updatedText) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
          Authorization: tokenAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ comment: updatedText, rate: "5" })
      });

      if (response.ok) {
        const updatedComment = await response.json();
        dispatch(updateCommentAction(postId, updatedComment));
      } else {
        console.error("Errore durante l'aggiornamento del commento:", await response.text());
      }
    } catch (error) {
      console.error("Errore nella fetch di updateComment:", error);
    }
  };
};

// Elimina un commento
export const deleteComment = (postId, commentId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: { Authorization: tokenAPI }
      });

      if (response.ok) {
        dispatch(deleteCommentAction(postId, commentId));
      } else {
        console.error("Errore durante l'eliminazione del commento:", await response.text());
      }
    } catch (error) {
      console.error("Errore nella fetch di deleteComment:", error);
    }
  };
};
