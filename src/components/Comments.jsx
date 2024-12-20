import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, addComment, updateComment, deleteComment } from "../redux/actions/commentsActions";
import { Row, Col, Form, Button, ListGroup } from "react-bootstrap";

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments[postId] || []);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Carica i commenti
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      dispatch(addComment(postId, newComment));
      setNewComment("");
    }
  };

  const handleEditComment = (commentId, text) => {
    setEditingCommentId(commentId);
    setEditedText(text);
  };

  const handleSaveEdit = (e, commentId) => {
    if (e.key === "Enter") {
      dispatch(updateComment(postId, commentId, editedText));
      setEditingCommentId(null);
    }
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(postId, commentId));
  };

  return (
    <div className="mt-3">
      <ListGroup>
        {comments.map((comment) => (
          <ListGroup.Item key={comment._id} className="d-flex justify-content-between align-items-center">
            {editingCommentId === comment._id ? (
              <Form.Control
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onKeyPress={(e) => handleSaveEdit(e, comment._id)}
                autoFocus
              />
            ) : (
              <span>{comment.comment}</span>
            )}
            <div>
              <Button variant="link" className="text-primary me-2" onClick={() => handleEditComment(comment._id, comment.comment)}>
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="link" className="text-danger" onClick={() => handleDeleteComment(comment._id)}>
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Row className="mt-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Aggiungi un commento"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
          />
        </Col>
        <Col xs="auto">
          <Button onClick={handleAddComment}>Invia</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Comments;
