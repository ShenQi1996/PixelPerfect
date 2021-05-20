class Like < ApplicationRecord
    validates :userId, :pictureId, presence: true
    validates :userId, uniqueness: {scope: [:pictureId]}


    belongs_to :user,
        foreign_key: :userId,
        class_name: :User

    belongs_to :picture,
        foreign_key: :pictureId,
        class_name: :Picture
end