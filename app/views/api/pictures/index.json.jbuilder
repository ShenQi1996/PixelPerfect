# json.array! @pictures do |picture|
#     json.extract! pictures, :id, :title, :private, :description, :ownerId
#     json.pictureUrl url_for(picture.photo)
# end


@pictures.each do |picture|
    json.set! picture.id do
        json.extract! picture, :id, :title, :description, :ownerId
        json.pictureUrl url_for(picture.photo)
    end
end