@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :userId, :pictureId, :username, :comment
    end
end