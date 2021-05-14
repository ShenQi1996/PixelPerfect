import * as PictureAPIUtil from "../util/picture_api_util";

export const RECEIVE_PICTURE = "RECEIVE_PICTURE";

const receivePicture = picture => ({
  type: RECEIVE_PICTURE,
  picture,
});

export const fetchPicture = pictureId => dispatch =>
  PictureAPIUtil.fetchPicture(pictureId).then(picture =>
    dispatch(receivePicture(picture))
  );
