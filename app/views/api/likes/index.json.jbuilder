@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :userId, :pictureId
    end
end