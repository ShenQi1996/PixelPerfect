import * as CommentsAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    id: comment.id,
    userId: comment.userId,
    pictureId: comment.pictureId,
    username: comment.username,
    comment: comment.comment,
  };
};

const removeComment = commentId => {
  return {
    type: RECEIVE_COMMENT,
    commentId,
  };
};

export const fetchComments = () => dispatch => {
  return CommentsAPIUtil.fetchComments().then(comments =>
    dispatch(receiveComments(comments))
  );
};

export const fetchComment = commentId => dispatch => {
  return CommentsAPIUtil.fetchComment(commentId).then(comment =>
    dispatch(receiveComment(comment))
  );
};

export const createComment =
  (userId, pictureId, username, comment) => dispatch => {
    return CommentsAPIUtil.createComment(
      userId,
      pictureId,
      username,
      comment
    ).then(comment => dispatch(receiveComment(comment)));
  };

export const deleteComment = commentId => dispatch => {
  return CommentsAPIUtil.deleteComment(commentId).then(() =>
    dispatch(removeComment(commentId))
  );
};
