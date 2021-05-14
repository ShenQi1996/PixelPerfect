json.extract! @picture, :id, :title, :ownerId
json.pictureUrl url_for(@picture.photo)