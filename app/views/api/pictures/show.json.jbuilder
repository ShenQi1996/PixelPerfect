json.extract! @picture, :id, :title, :private, :description, :ownerId
json.pictureUrl url_for(@picture.photo)
json.likes @picture.likes