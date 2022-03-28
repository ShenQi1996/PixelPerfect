export const fetchComment = commentId =>
  $.ajax({
    method: "GET",
    url: `/api/comments/${commentId}`,
  });

export const fetchComments = () =>
  $.ajax({
    method: "GET",
    url: "/api/comments",
  });

export const createComment = (userId, pictureId, username, comment) =>
  $.ajax({
    method: "POST",
    url: "/api/comments",
    data: {
      comment: {
        userId,
        pictureId,
        username,
        comment,
      },
    },
  });

export const deleteComment = commentId =>
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`,
  });
