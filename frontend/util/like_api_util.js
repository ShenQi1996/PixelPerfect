export const fetchLike = likeId =>
  $.ajax({
    method: "GET",
    url: `/api/pictures/${likeId}`,
  });

export const fetchLikes = () =>
  $.ajax({
    method: "GET",
    url: "/api/likes",
  });

export const createLike = (userId, pictureId) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: {
      like: {
        userId,
        pictureId,
      },
    },
  });
};

export const deleteLike = likeId =>
  $.ajax({
    method: "DELETE",
    url: `/api/likes/${likeId}`,
  });
