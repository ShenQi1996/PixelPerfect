import * as PictureAPIUtil from "../util/picture_api_util";

export const RECEIVE_PICTURE = "RECEIVE_PICTURE";
export const RECEIVE_PICTURES = "RECEIVE_PICTURES";
export const REMOVE_PICTURE = "REMOVE_PICTURE";

const receivePicture = picture => ({
  type: RECEIVE_PICTURE,
  picture,
});

const receivePictures = pictures => ({
  type: RECEIVE_PICTURES,
  pictures,
});

const removePicture = pictureId => ({
  type: REMOVE_PICTURE,
  pictureId,
});

export const fetchPicture = pictureId => dispatch =>
  PictureAPIUtil.fetchPicture(pictureId).then(picture =>
    dispatch(receivePicture(picture))
  );

export const fetchPictures = () => dispatch =>
  PictureAPIUtil.fetchPictures().then(pictures =>
    dispatch(receivePictures(pictures))
  );

export const createPicture = picture => dispatch =>
  PictureAPIUtil.createPicture(picture).then(picture =>
    dispatch(receivePicture(picture))
  );

export const deletePicture = pictureId => dispatch =>
  PictureAPIUtil.deletePicture(pictureId).then(() =>
    dispatch(removePicture(pictureId))
  );
