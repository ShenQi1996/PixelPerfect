import * as LikesAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes,
  };
};

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    id: like.id,
    userId: like.userId,
    pictureId: like.pictureId,
  };
};

const removeLike = likeId => {
  return {
    type: REMOVE_LIKE,
    likeId,
  };
};

export const fetchlikes = () => dispatch => {
  return LikesAPIUtil.fetchLikes().then(likes => dispatch(receiveLikes(likes)));
};

export const fetchLike = likeId => dispatch => {
  return LikesAPIUtil.fetchLike(likeId).then(like =>
    dispatch(receiveLike(like))
  );
};

export const createLike = (userId, pictureId) => dispatch => {
  return LikesAPIUtil.createLike(userId, pictureId).then(like =>
    dispatch(receiveLike(like))
  );
};

export const deleteLike = likeId => dispatch => {
  return LikesAPIUtil.deleteLike(likeId).then(() =>
    dispatch(removeLike(likeId))
  );
};
