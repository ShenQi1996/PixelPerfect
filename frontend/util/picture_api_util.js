export const fetchPicture = pictureId =>
  $.ajax({
    method: "GET",
    url: `api/pictures/${pictureId}`,
  });

// need more paths
