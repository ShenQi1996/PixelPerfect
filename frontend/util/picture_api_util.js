export const fetchPicture = pictureId =>
  $.ajax({
    method: "GET",
    url: `api/pictures/${pictureId}`,
  });

export const fetchPictures = () =>
  $.ajax({
    method: "GET",
    url: `/api/pictures`,
  });

export const createPicture = picture =>
  $.ajax({
    method: "POST",
    url: "/api/pictures",
    data: picture,
    contentType: false,
    processData: false,
  });

export const deletePicture = pictureId =>
  $.ajax({
    method: "DELETE",
    url: `/api/pictures/${pictureId}`,
  });
