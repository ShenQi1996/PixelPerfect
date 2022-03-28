class Picture < ApplicationRecord 
    validates :title, presence: true

    belongs_to :owner, 
        foreign_key: :ownerId,
        class_name: :User

    has_many :likes,
        foreign_key: :pictureId,
        class_name: :Like

    has_many :comments,
        foreign_key: :pictureId,
        class_name: :Comment

    has_one_attached :photo     #Photo can be change to anything      
end
